import { component$, $ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

interface ChatSetUsernameProps {
  username: Signal<string>;
}
export const ChatSetUsername = component$<ChatSetUsernameProps>(
  ({ username }) => {
    const setUsername = $((e: SubmitEvent) => {
      const t = e.target as HTMLFormElement;
      const un = Object.fromEntries(new FormData(t));
      username.value = un.username as string;
      t.remove();
    });
    return (
      <form
        preventdefault:submit
        class="absolute bottom-0 left-0 flex w-full place-items-center justify-around bg-slate-300 p-2 text-slate-950"
        onSubmit$={setUsername}
      >
        <input
          type="text"
          name="username"
          placeholder="Lag ett brukernavn"
          class="block w-40 rounded p-2 placeholder-slate-800 outline"
          bind:value={username}
        />
        <button class="block rounded-sm bg-yellow-400 px-2 py-1 outline outline-slate-900">
          Start
        </button>
      </form>
    );
  },
);
