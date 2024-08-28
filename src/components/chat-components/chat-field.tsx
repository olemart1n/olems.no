import { component$, type Signal } from "@builder.io/qwik";
export interface ChatFieldProps {
  messages: ChatFieldPropsObj[];
  messageEndRefDiv: Signal<HTMLDivElement | undefined>;
}

interface ChatFieldPropsObj {
  from: string;
  message: string;
}

export const ChatField = component$<ChatFieldProps>(
  ({ messages, messageEndRefDiv }) => {
    return (
      <div ref={messageEndRefDiv}>
        {messages.map(
          (
            { message, from }: { message: string; from: string },
            index: number,
          ) => (
            <div key={index}>
              <p class="text-sm">{from}</p>
              <div class="mb-2 max-w-xs self-start rounded bg-blue-500 p-2 text-white">
                {message}
              </div>
            </div>
          ),
        )}
      </div>
    );
  },
);
