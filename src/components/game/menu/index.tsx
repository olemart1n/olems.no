import { component$, useContext } from "@builder.io/qwik";
import { Controllers } from "./controllers";
import { UsernameForm } from "./usernameForm";
import { ConnectionDetails } from "./connectionDetails";
import gameContext from "~/game-context";

export const Menu = component$(() => {
  const gameStore = useContext(gameContext);
  return (
    <div class="absolute -left-1/4 h-full w-1/2 text-white">
      <div
        class={
          "translate-x flex h-full w-1/2 transform flex-col bg-slate-800/[.6] duration-300 ease-in-out " +
          (gameStore.isMenu.value ? "translate-x-full" : "translate-x-0")
        }
      >
        {/* - - - - - - - - - - - - - - - -  */}
        <button class="fixed left-full top-1 ml-1 h-7 w-7 rounded-sm bg-gray-300 bg-opacity-20 text-xs font-bold text-slate-100 ">
          esc
        </button>

        <h1 class="text-center text-xl">Car Game</h1>
        <div class="text-center text-red-400">
          <p class="underline">under utvikling</p>
        </div>
        <Controllers />

        <UsernameForm />
        <div class="mt-auto bg-slate-100 p-2 text-slate-700">
          <ConnectionDetails />
        </div>
      </div>
    </div>
  );
});
