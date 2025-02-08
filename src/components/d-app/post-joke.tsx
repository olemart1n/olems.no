import { $, component$, useOn, useSignal } from "@builder.io/qwik";
import type { Joke } from "~/d-app";
import { postJoke } from "~/d-app/post-joke";
export interface PostJokeProps {
  jokes: Joke[];
  creatorAddr: `0x${string}`;
}

export const PostJoke = component$<PostJokeProps>(({ jokes, creatorAddr }) => {
  const isFormOpenSig = useSignal(false);

  const submit = $(async (e: SubmitEvent) => {
    const form = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(form.entries());
    const { setup, punchline } = data as { setup: string; punchline: string };
    const joke = {
      setup: setup,
      punchline: punchline,
      creator: creatorAddr,
      isDeleted: false,
    };

    const isPosted = await postJoke(punchline, setup, creatorAddr);
    if (isPosted) {
      jokes.push(joke);
      isFormOpenSig.value = false;
    } else {
      console.log("error posting joke");
    }
  });

  useOn("submit", submit);
  return (
    <div class="w-full p-4 text-center">
      <button
        onClick$={() => (isFormOpenSig.value = !isFormOpenSig.value)}
        class="rounded-sm border border-slate-800 bg-yellow-500 px-4"
      >
        Post a joke
      </button>
      <dialog open={isFormOpenSig.value}>
        <form
          preventdefault:submit
          class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-slate-500 bg-opacity-50"
        >
          <div class="flex h-80 w-80 flex-col justify-around rounded bg-slate-50 p-4">
            <input
              name="setup"
              type="text"
              placeholder="setup"
              class="h-10 w-full rounded-sm "
            />
            <input
              name="punchline"
              type="text"
              placeholder="punchline"
              class="h-10 w-full rounded-sm "
            />
            <button
              type="submit"
              class="rounded-sm border border-slate-800 bg-yellow-500 px-4"
            >
              Post Joke
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
});
