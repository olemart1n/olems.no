import { component$, useContext } from "@builder.io/qwik";
import { Controllers } from "./controllers";
import { UsernameForm } from "./username-form";
import { ConnectionDetails } from "./connection-details";
import gameContext from "~/game/game-context";

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
        <button class="fixed left-full top-1 ml-1 h-7 w-7 rounded-sm bg-yellow-400 bg-opacity-80 text-xs font-bold text-slate-800 ">
          esc
        </button>

        <h1 class="text-center text-xl">Car Game</h1>
        <div class="text-center text-red-400">
          <p class="underline">under utvikling</p>
        </div>
        <Controllers />

        <UsernameForm />
        <button
          class={
            "mx-auto mt-auto block rounded px-2 py-1 font-semibold text-black " +
            (!gameStore.isConnectedToSocket
              ? "scale-100 cursor-not-allowed bg-gray-400"
              : "scale-110 cursor-pointer bg-yellow-400 outline outline-1")
          }
          onClick$={() => document.querySelector("main")?.requestPointerLock()}
        >
          Lukk meny
        </button>
        <div class="mt-auto bg-slate-100 p-2 text-slate-700">
          <ConnectionDetails />
        </div>
      </div>
    </div>
  );
});
