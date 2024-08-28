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
  const setUsernameForm = useSignal<HTMLFormElement>();

  const setUsernameAndConnect = $((e: SubmitEvent) => {
    const conn = connectWebSocket();
    setSocketEventListeners(conn, visitorCount, messages, messageEndRefDiv);
    setInputFormSubmitEvent(
      inputForm,
      conn,
      username,
      messages,
      messageEndRefDiv,
    );
    const t = e.target as HTMLFormElement;
    const un = Object.fromEntries(new FormData(t));
    username.value = un.username as string;
    t.remove();
  });

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      setUsernameForm.value?.addEventListener("submit", (e) => {
        setUsernameAndConnect(e);
      });
    }),
  );

  return (
    <main class="p-2 text-slate-50">
      <h1 class="w-full text-center">Chat | WebSocket | Golang</h1>
      <div class="mx-auto my-6 flex w-full flex-col justify-around p-1 lg:w-2/3">
        <div class="flex w-full -translate-y-2 justify-evenly">
          <i>Visitors: {visitorCount.value}</i>
          <i>{username.value}</i>
        </div>
        <div class="relative h-80 rounded border border-slate-100 p-2">
          <div class="no-scrollbar h-5/6 overflow-y-scroll p-2">
            <ChatField
              messages={messages}
              messageEndRefDiv={messageEndRefDiv}
            />
          </div>
          <div class="h-1/6">
            <ChatSetUsername form={setUsernameForm} />
            <ChatForm inputForm={inputForm} />
          </div>
        </div>
      </div>
      <div class="mx-auto my-2 flex flex-col justify-evenly bg-slate-600 p-1 text-sm lg:w-1/2">
        <p>Meldinger blir distribuert til klienter via socket</p>
        <p>Meldinger blir ikke lagret.</p>
      </div>

      <div class="mx-auto mt-10 text-xs md:w-10/12">
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
