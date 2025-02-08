import { component$, type Signal } from "@builder.io/qwik";
import { vote } from "~/d-app/vote";
export interface RewardSectionProps {
  jokeIndex: number;
  accountAddress: Signal<`0x${string}`>;
}

export const RewardSection = component$<RewardSectionProps>(
  ({ jokeIndex, accountAddress }) => {
    return (
      <div>
        <div class="flex justify-center pt-5 text-3xl font-bold text-slate-900">
          Reward the joke
        </div>
        <div class=" mx-auto flex w-1/3 justify-around  pt-5">
          <button
            class=" text-5xl focus:outline-none"
            onClick$={() => vote(1, jokeIndex, accountAddress.value)}
          >
            😃
          </button>
          <button
            class="text-5xl focus:outline-none"
            onClick$={() => vote(2, jokeIndex, accountAddress.value)}
          >
            😂
          </button>
          <button
            class="text-5xl focus:outline-none"
            onClick$={() => vote(3, jokeIndex, accountAddress.value)}
          >
            😫
          </button>
        </div>
      </div>
    );
  },
);
