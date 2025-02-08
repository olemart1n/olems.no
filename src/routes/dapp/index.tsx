import { component$, useSignal, $, useStore } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  RewardSection,
  Joke,
  ConnectWalletButton,
  WithdrawSection,
  PostJoke,
} from "../../components/d-app";
import { fetchJokes } from "~/d-app";
export const useFetchJokes = routeLoader$(() => {
  const jokes = fetchJokes();
  return jokes;
});
export default component$(() => {
  const routeData = useFetchJokes();
  const jokeIndex = useSignal(0);
  interface Joke {
    setup: string;
    punchline: string;
    creator: string;
    isDeleted: boolean;
    address: `0x${string}`;
    balance: number;
  }

  const dApp = useStore({
    jokes: routeData.value.jokes as Joke[],
    jokeIndex: 0,
    error: routeData.value.error,
    isConnected: useSignal(false),
    accountAdd: useSignal<`0x${string}`>("0x0"),
    balance: useSignal<bigint>(0n),
  });

  const handlePreviousJoke = $(() => {
    jokeIndex.value =
      jokeIndex.value === 0 ? dApp.jokes.length - 1 : jokeIndex.value - 1;
  });
  const handleNextJoke = $(() => {
    jokeIndex.value =
      jokeIndex.value === dApp.jokes.length - 1 ? 0 : jokeIndex.value + 1;
  });

  return (
    <main class="flex flex-col bg-slate-500">
      <h1 class="text-center text-3xl font-bold">DApp</h1>
      <h2 class="text-center text-2xl font-bold">Dad Jokes</h2>
      <ConnectWalletButton
        isConnected={dApp.isConnected}
        address={dApp.accountAdd}
        accountBalance={dApp.balance}
      />
      <div class="flex w-full flex-col items-center">
        <WithdrawSection
          balance={dApp.balance}
          accountAddr={dApp.accountAdd.value}
        />
      </div>
      <div class="mx-auto my-20 flex min-h-20 w-1/2 justify-around rounded bg-yellow-400 p-4 text-slate-900">
        {dApp.jokes.length > 0 && (
          <Joke
            setup={dApp.jokes[jokeIndex.value].setup}
            punchline={dApp.jokes[jokeIndex.value].punchline}
          />
        )}
      </div>
      <div class="mx-auto mb-10 flex w-1/3 justify-around">
        <button
          class="rounded bg-stone-300 px-2 py-1 text-slate-900 hover:bg-stone-400"
          onClick$={handlePreviousJoke}
        >
          Previous
        </button>
        <button
          class="rounded bg-stone-300 px-2 py-1 text-slate-900 hover:bg-stone-400"
          onClick$={handleNextJoke}
        >
          Next
        </button>
      </div>
      {dApp.isConnected.value && (
        <RewardSection
          accountAddress={dApp.accountAdd}
          jokeIndex={jokeIndex.value}
        />
      )}

      <div>
        {dApp.error && <p class="text-center text-red-500">{dApp.error}</p>}
      </div>
      <PostJoke jokes={dApp.jokes} creatorAddr={dApp.accountAdd.value} />
    </main>
  );
});
export const head: DocumentHead = {
  title: "DApp",
  meta: [
    {
      name: "description",
      content: "decentralized application",
    },
  ],
};
