import { component$ } from "@builder.io/qwik";
export interface ChatFieldProps {
  // messages: Signal<string[]>;
  messages: string[];
}

export const ChatField = component$<ChatFieldProps>(({ messages }) => {
  return (
    <div class="flex-grow overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          class="mb-2 max-w-xs self-start rounded bg-blue-500 p-2 text-white"
        >
          {message}
        </div>
      ))}
    </div>
  );
});
