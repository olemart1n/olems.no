import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Banner, HandlelistaLink } from "~/components";

export default component$(() => {
  return (
    <main class="flex flex-col justify-around text-white">
      <div class="flex justify-around">
        <div class="flex-col">
          <h1 class="text-lg underline">Utvikler</h1>
          <p>Typescript</p>
          <p>Go-lang</p>
          <p>React | Qwik</p>
          <br />
        </div>
        <Banner />
      </div>
      <div class="my-8 flex w-full flex-col text-center">
        <a class="m-0 p-0 text-sm" href="https://handlelista.no">
          link: www.handlelista.no
        </a>
        <HandlelistaLink />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Ole M",
  meta: [
    {
      name: "description",
      content: "Hjemmeside, homesite, blog, chat",
    },
  ],
};
