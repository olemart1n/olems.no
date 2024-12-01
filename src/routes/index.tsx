import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FancyCard } from "~/components";
// import { ProfileImage } from "~/components/profile-image";
export default component$(() => {
  return (
    <main class="flex flex-col place-items-center justify-around text-white">
      <FancyCard>
        <h1 class="text-2xl">Ole Martin</h1>
        <p class="text-xl">Nett utvikler</p>
        <div class="mx-auto h-1 w-3/4 border-b border-slate-200"></div>
        <div class=" text-lgd text-gray-400">
          <ul>
            <li>TypeScript</li>
            <li>Go-lang</li>
            <li>React | Qwik | Next</li>
            <a class="m-0 p-0 text-sm" href="https://handlelista.no">
              www.handlelista.no
            </a>
          </ul>
        </div>
      </FancyCard>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Ole M",
  meta: [
    {
      name: "description",
      content: "Hjemmeside, homesite",
    },
  ],
};
