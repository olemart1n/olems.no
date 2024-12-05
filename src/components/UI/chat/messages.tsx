import { component$ } from "@builder.io/qwik";

export interface Message {
  senderUsername: string;
  message: string;
  senderId: string;
}

interface MessagesProps {
  messages: Message[];
  clientId: string;
}
export const Messages = component$<MessagesProps>(({ clientId, messages }) => {
  if (messages.length === 0) return <p>No messages yet</p>;
  return messages.map(
    ({ message, senderUsername, senderId }: Message, index: number) => {
      if (senderId === clientId) {
        return (
          <div key={index}>
            <p class=" text-sm ">{senderUsername}</p>
            <div class="mb-2 w-fit rounded bg-yellow-500 bg-opacity-40 p-1 text-white">
              {message}
            </div>
          </div>
        );
      } else
        return (
          <div key={index}>
            <p class="text-right text-sm">{senderUsername}</p>
            <div class="mb-2 ml-auto w-fit rounded bg-yellow-300 p-1 text-slate-800">
              {message}
            </div>
          </div>
        );
    },
  );
});
