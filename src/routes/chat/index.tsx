import {
  component$,
  useOnDocument,
  useSignal,
  $,
  useStore,
} from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { ChatForm, ChatField, GoServerShowcase } from "~/components";

interface MessageType {
  message: string;
  from: string;
}
export default component$(() => {
  const messages = useStore<MessageType[]>([]);
  const inputForm = useSignal<HTMLFormElement>();
  const visitorCount = useSignal(0);
  const username = useSignal<string>("");
  const setUsernameFlag = useSignal<HTMLDivElement>();
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const serverSockerURL =
        import.meta.env.PUBLIC_ENV === "production"
          ? "wss://api.olems.no/ws"
          : "ws://localhost:8080/ws";
      const conn = new WebSocket(serverSockerURL);
      conn.addEventListener("message", (e) => {
        const data = JSON.parse(e.data);
        switch (data.name) {
          case "visitorCount":
            visitorCount.value = data.payload.visitorCount;
            break;
          case "message":
            messages.push(data.payload.message);
            break;
          default:
            break;
        }
      });

      conn.addEventListener("error", (err) => {
        console.error("WebSocket error:", err);
        console.log("why isnt it connecting?", { err });
      });

      conn.addEventListener("close", () => {
        console.log("WebSocket connection closed");
      });
      inputForm.value!.onsubmit = (e) => {
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
      };
    }),
  );
  const setUsername = $((e: SubmitEvent) => {
    const t = e.target as HTMLFormElement;
    const un = Object.fromEntries(new FormData(t));
    username.value = un.username as string;
    setUsernameFlag.value?.remove();
    t.remove();
  });

  return (
    <main class="block p-2 text-slate-50">
      <h1 class="w-full text-center">Chat | WebSocket | Golang</h1>
      <div class="mx-auto my-6 flex h-2/3 max-h-72 w-full flex-col justify-around p-1 md:w-2/3 md:flex-row">
        <div class="flex h-full flex-col justify-evenly">
          <div>
            <p>Meldinger blir distribuert til klienter via socket</p>
            <p>Meldinger blir ikke lagret.</p>
            <p>Ditt brukernavn: {username.value}</p>
          </div>
          <form
            preventdefault:submit
            class="flex w-full justify-around text-black"
            onSubmit$={setUsername}
          >
            <input
              type="text"
              name="username"
              placeholder="Brukernavn"
              class="block w-40 rounded-sm p-1"
            />
            <button
              class="block rounded-sm px-2 py-1 text-white outline"
              onClick$={() => {}}
            >
              Start
            </button>
          </form>
        </div>
        <div class="h-fit">
          <i class="-translate-y-7">Visitors: {visitorCount.value}</i>
          <div class="relative h-72 border border-slate-100 p-2">
            <ChatField messages={messages} />
            <ChatForm inputForm={inputForm} />
            <div
              class="absolute bottom-0 left-0 h-16 w-full bg-slate-100 text-center text-black"
              ref={setUsernameFlag}
            >
              <p>Set a username to chat</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto mt-48 h-9 text-xs md:w-10/12">
        <GoServerShowcase />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Chat | web socket",
  meta: [
    {
      name: "showcasing a simpl chat that uses web-sockets",
      content: "golang | websocket | server | qwik | resumability",
    },
  ],
};
