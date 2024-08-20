import { component$, type Signal } from "@builder.io/qwik";
export interface ChatFieldProps {
  messages: Signal<string[]>;
}

export const ChatField = component$<ChatFieldProps>(() => {
  return (
    <div class="flex-grow overflow-y-auto p-4">
      {/* {messages.value.map((message, index) => (
        <div
            key={index}
            class="mb-2 p-2 rounded bg-blue-500 text-white max-w-xs self-start"
        >
            {message}
        </div>
    ))} */}
    </div>
  );
});
