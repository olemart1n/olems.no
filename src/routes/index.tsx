import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { ProfileImage } from "~/components/profile-image";
export default component$(() => {
  return (
    <main class="flex flex-col justify-around text-white">
      <div class="relative mx-auto aspect-square max-w-sm overflow-hidden rounded bg-slate-100 text-center shadow-lg md:w-96">
        {/* <div class="mx-auto mt-10 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 shadow-lg">
          <ProfileImage />
        </div> */}

        {/* <h1 class="mt-6 text-2xl font-bold text-gray-800">Ole Martin</h1>
        <p class="text-gray-600">Nett utvikler</p>

        <div class="animate-spin-slow absolute bottom-0 left-0 h-60 w-60 -translate-y-1/2 transform rounded-full bg-gradient-to-tr from-purple-400 to-blue-400 opacity-25 blur-3xl"></div>

        <div class="px-6 pb-8 text-gray-700">
          <ul>
            <li>TypeScript</li>
            <li>Go-lang</li>
            <li>React | Qwik | Next</li>
            <a class="m-0 p-0 text-sm" href="https://handlelista.no">
              www.handlelista.no
            </a>
          </ul>
        </div> */}
      </div>
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
