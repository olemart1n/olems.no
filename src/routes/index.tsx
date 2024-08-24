import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components";

export default component$(() => {
  return (
    <main class="flex flex-col justify-around text-white">
      <div class="flex justify-around">
        <h1>Hei. Mitt navn er Ole Martin</h1>
        <br />
        <Banner />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
