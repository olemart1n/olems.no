import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components";

export default component$(() => {
  return (
    <main class="text-white">
      <h1 class="text-white">Hi 👋</h1>
      <div class="flex justify-around">
        <p>Hei. Mitt navn er Ole Martin</p>
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
