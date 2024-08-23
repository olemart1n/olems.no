import {
  component$,
  useOnDocument,
  useSignal,
  $,
  useStore,
} from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { ChatForm, ChatField, GoServerShowcase } from "~/components";
export default component$(() => {
  const messages = useStore<string[]>([]);
  const inputForm = useSignal<HTMLFormElement>();
  const visitorCount = useSignal(0);
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const conn = new WebSocket("ws://localhost:3000/ws");
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
            payload: { message: input.message, from: "test" },
          }),
        );
        messages.push(input.message as string);
        inputForm.value?.reset();
      };
    }),
  );

  return (
    <main class="block p-2 text-slate-50">
      <h1>Chat | WebSocket | Golang</h1>
      <p>Meldinger blir distribuert til klienter via socket</p>
      <p>Meldinger blir ikke lagret.</p>
      <div class="my-6 flex h-2/3 max-h-72 w-full flex-col rounded border border-white  p-1 shadow-lg md:w-1/2">
        <i class="-translate-y-7">Visitors: {visitorCount.value}</i>
        <ChatField messages={messages} />
        <ChatForm inputForm={inputForm} />
      </div>
      <div class="mx-auto h-96 text-xs md:w-10/12">
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
