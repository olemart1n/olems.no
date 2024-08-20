import { component$, useOnDocument, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ChatForm, ChatField } from "~/components";
export default component$(() => {
  const messages = useSignal([""]);
  const inputForm = useSignal<HTMLFormElement>();

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      console.log("HELLO");
      const conn = new WebSocket("ws://localhost:3000/ws");
      console.log(conn);
      inputForm.value!.onsubmit = (e) => {
        e.preventDefault();
        const input = Object.fromEntries(new FormData(inputForm.value));
        conn.send(input.message);
      };
    }),
  );

  return (
    <main class="text-slate-50">
      <h1>Simple chat application</h1>
      <p>Chat | WebSocket | Golang</p>

      <div class="ms-auto flex h-2/3 w-1/2 flex-col rounded border border-white  shadow-lg">
        <i class="-translate-y-7">Visitors: 0</i>
        <ChatField messages={messages} />
        <ChatForm inputForm={inputForm} />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Chat | web socket",
  meta: [
    {
      name: "showcasing a simpl chat that uses web-sockets",
      content: "showcasing a simple chat",
    },
  ],
};
