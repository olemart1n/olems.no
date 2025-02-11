import { component$ } from "@builder.io/qwik";

import { CreateCounter } from "~/components/sui-counter";
export default component$(() => {
  return (
    <main>
      <div class=" bottom-2 top-2 my-2 flex items-center justify-evenly align-middle outline">
        {" "}
        <h1 class="block text-4xl text-slate-50">Sui Counter</h1>
        <button class=" my-5 w-fit min-w-40 rounded-sm bg-yellow-400 px-5 py-3">
          Not connected
        </button>
      </div>

      <p class="min-h-20 text-slate-100">"Your sui address: "</p>

      <div>
        <CreateCounter />
      </div>
    </main>
  );
});
