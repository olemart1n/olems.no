import { component$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

interface ChatSetUsernameProps {
  form: Signal<HTMLFormElement | undefined>;
}
export const ChatSetUsername = component$<ChatSetUsernameProps>(({ form }) => {
  return (
    <form
      preventdefault:submit
      class="absolute bottom-0 left-0 flex w-full place-items-center justify-around bg-slate-200 p-2  text-slate-950 "
      ref={form}
    >
      <input
        type="text"
        name="username"
        placeholder="Brukernavn"
        class="block w-40 rounded p-2 outline"
      />
      <button class="block rounded-sm bg-yellow-400 px-2 py-1 outline outline-yellow-500">
        Start
      </button>
    </form>
  );
});
