import { component$ } from "@builder.io/qwik";
import { Socials } from "./socials";
import { Internal } from "./internal";
export const Header = component$(() => {
  return (
    <header class="flex  bg-black p-3 text-slate-50">
      <nav class=" bg-dark flex w-1/2 justify-between">
        <a href="/" class="ml-0 text-xl">
          <h1>Ole Martin</h1>
        </a>
        <div class="relative mx-auto hidden justify-around gap-x-3 sm:flex">
          <Internal />
        </div>
      </nav>
      <nav class="ml-auto flex gap-x-2">
        <Socials />
      </nav>
    </header>
  );
});
