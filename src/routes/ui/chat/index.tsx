import { component$, useStore } from "@builder.io/qwik";
import { Chat, type Message } from "~/components/UI";
export default component$(() => {
  const messageStore = useStore<Message[]>([]);

  return (
    <div class="flex h-full w-full">
      <div class="w-1/2">
        <Chat messageStore={messageStore} />
      </div>
      <div class="w-1/2">
        <Chat messageStore={messageStore} />
      </div>
    </div>
  );
});
