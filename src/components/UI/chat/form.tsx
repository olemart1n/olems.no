import { component$, useOn, useSignal, $, type Signal } from "@builder.io/qwik";
import type { Message } from "./messages";
import { scrollToBottom } from "./scroll-to-bottom";

interface FormProps {
  messages: Message[];
  clientId: string;
  clientUsername: string;
  messageEndRefDiv: Signal<HTMLDivElement | undefined>;
}

export const Form = component$<FormProps>(
  ({ messages, clientId, clientUsername, messageEndRefDiv }) => {
    const formEl = useSignal<HTMLFormElement>();
    useOn(
      "submit",
      $(() => {
        const input = Object.fromEntries(new FormData(formEl.value));

        if ((input.message as string).length < 2) return;
        const message: Message = {
          senderId: clientId,
          senderUsername: clientUsername,
          message: input.message as string,
        };
        messages.push(message);
        formEl.value?.reset();
        scrollToBottom(messageEndRefDiv);
      }),
    );

    return (
      <form
        ref={formEl}
        class="m-0 flex h-full w-full items-center p-0 text-white"
        preventdefault:submit
      >
        <input
          type="text"
          name="message"
          class="focus:none mt-auto h-full flex-grow rounded border-none bg-black bg-opacity-50 px-2 text-sm placeholder:text-center focus:placeholder-transparent focus:outline-none"
          placeholder="Send a message.."
          autoComplete="off"
          autoCorrect="off"
          minLength={2}
        />
      </form>
    );
  },
);
