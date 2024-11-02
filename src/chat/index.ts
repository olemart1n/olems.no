import { type Signal } from "@builder.io/qwik";
export interface SocketMessage {
  name: string;
  payload: VisitorCount | MessageBroadcast;
}

export interface VisitorCount {
  visitorCount: number;
}

export interface MessageBroadcast {
  message: string;
  from: string;
}
export const connectWebSocket = () => {
  const serverSockerURL =
    import.meta.env.PUBLIC_ENV === "production"
      ? "wss://api.olems.no/ws"
      : "ws://localhost:8080/ws";
  const conn = new WebSocket(serverSockerURL);

  return conn;
};

export const scrollToBottom = (
  messageEndRef: Signal<HTMLDivElement | undefined>,
) => {
  setTimeout(() => {
    messageEndRef.value?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 10);
};

export const setSocketEventListeners = (
  conn: WebSocket,
  visitorCount: Signal<number>,
  messages: MessageBroadcast[],
  messageEndRef: Signal<HTMLDivElement | undefined>,
) => {
  conn.addEventListener("error", (err) => {
    console.error("WebSocket error:", err);
    console.log("why isnt it connecting?", { err });
  });

  conn.addEventListener("close", () => {
    console.log("WebSocket connection closed");
  });

  conn.addEventListener("message", (e) => {
    const data = JSON.parse(e.data);
    switch (data.name) {
      case "visitorCount":
        visitorCount.value = data.payload.visitorCount;
        break;
      case "message":
        messages.push({
          message: data.payload.message as string,
          from: data.payload.from,
        });
        scrollToBottom(messageEndRef);
        break;
      default:
        break;
    }
  });
};

export const setInputFormSubmitEvent = (
  inputForm: Signal,
  conn: WebSocket,
  username: Signal,
  messages: MessageBroadcast[],
  messageEndRef: Signal<HTMLDivElement | undefined>,
) => {
  inputForm.value!.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const input = Object.fromEntries(new FormData(inputForm.value));
    conn.send(
      JSON.stringify({
        name: "message",
        payload: { message: input.message, from: username.value },
      }),
    );
    messages.push({
      message: input.message as string,
      from: username.value,
    });
    inputForm.value?.reset();
    scrollToBottom(messageEndRef);
  };
};
