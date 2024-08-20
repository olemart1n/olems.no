import { component$, type Signal } from "@builder.io/qwik";

interface ChatFormProps {
  inputForm: Signal<HTMLFormElement | undefined>;
}
export const ChatForm = component$<ChatFormProps>(({ inputForm }) => {
  return (
    <form
      ref={inputForm}
      class="flex items-center border-t border-gray-300 p-4"
    >
      <input
        type="text"
        name="message"
        class="flex-grow rounded border border-gray-300 bg-transparent p-2 focus:border-blue-300 focus:outline-none focus:ring"
        placeholder="Type a message..."
      />
      <button class="text-gray ml-4  rounded border border-white px-4 py-2 text-white hover:bg-slate-800">
        Send
      </button>
    </form>
  );
});
