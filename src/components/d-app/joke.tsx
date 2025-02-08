import { component$ } from "@builder.io/qwik";

export const Joke = component$(
  ({ punchline, setup }: { punchline: string; setup: string }) => {
    return (
      <div class="mx-auto max-w-sm rounded bg-white p-6 shadow-lg">
        <h2 class="font-sans text-4xl font-bold text-gray-800">{setup}</h2>

        <p class="font-sans text-2xl">{punchline}</p>
      </div>
    );
  },
);
