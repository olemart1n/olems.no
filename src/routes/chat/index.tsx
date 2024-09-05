import {
  component$,
  useSignal,
  $,
  useStore,
  useOnDocument,
} from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import {
  ChatForm,
  ChatField,
  GoServerShowcase,
  ChatSetUsername,
} from "~/components";
import {
  connectWebSocket,
  setSocketEventListeners,
  setInputFormSubmitEvent,
} from "~/lib";
import type { MessageBroadcast } from "~/def";

export default component$(() => {
  const messages = useStore<MessageBroadcast[]>([]);
  const inputForm = useSignal<HTMLFormElement>();
  const visitorCount = useSignal(0);
  const username = useSignal<string>("");
  const messageEndRefDiv = useSignal<HTMLDivElement>();

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const conn = connectWebSocket();
      setSocketEventListeners(conn, visitorCount, messages, messageEndRefDiv);
      setInputFormSubmitEvent(
        inputForm,
        conn,
        username,
        messages,
        messageEndRefDiv,
      );
    }),
  );

  return (
    <main class="p-2 text-slate-50">
      <h1 class="w-full text-center">Chat | WebSocket | Golang</h1>
      <div class="mx-auto my-6 flex w-full flex-col justify-around p-1 lg:w-2/3">
        <div class="flex w-full -translate-y-2 justify-between">
          <i>Visitors: {visitorCount.value}</i>
          <i>{username.value}</i>
          <button
            class="border-.5 h-6 w-6 rounded border border-slate-500 text-xs text-slate-500"
            onClick$={() => document.documentElement.requestFullscreen()}
          >
            {" "}
            &harr;
          </button>
        </div>
        <div class="relative h-80  p-2">
          <div class="no-scrollbar h-5/6 overflow-y-scroll rounded border border-slate-100 p-2">
            <ChatField
              messages={messages}
              messageEndRefDiv={messageEndRefDiv}
            />
          </div>
          <div class="h-1/6">
            <ChatSetUsername username={username} />
            <ChatForm inputForm={inputForm} />
          </div>
        </div>
      </div>
      <div class="mx-auto my-2 flex flex-col justify-evenly bg-slate-600 p-1 text-sm lg:w-1/2">
        <p>Meldinger blir distribuert til klienter via socket</p>
        <p>Meldinger blir ikke lagret.</p>
      </div>

      <div class="mx-auto mt-20 text-xs md:w-10/12">
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
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=no",
    },
  ],
};
