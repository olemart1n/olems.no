import { component$, useSignal } from "@builder.io/qwik";
import { Messages, type Message } from "./messages";
import { Form } from "./form";
import { faker } from "@faker-js/faker";

interface ChatProps {
  messageStore: Message[];
}
export const Chat = component$<ChatProps>(({ messageStore }) => {
  // const messageStore = useStore<Message[]>([]);
  const clientId = Math.random().toString(36).substring(2, 10);
  const clientUsername = faker.person.firstName();
  const messageEndRefDiv = useSignal<HTMLDivElement>();
  return (
    <div
      class="outline-1.5 chat m-2 h-60 min-h-full rounded p-2 outline outline-black"
      style={{ display: "grid", gridTemplateRows: "90% 10%" }}
    >
      <div class="no-scrollbar overflow-y-scroll">
        <div ref={messageEndRefDiv}>
          <Messages clientId={clientId} messages={messageStore} />
        </div>
      </div>
      <div>
        <Form
          messages={messageStore}
          clientId={clientId}
          clientUsername={clientUsername}
          messageEndRefDiv={messageEndRefDiv}
        />
      </div>
    </div>
  );
});
export { type Message };
