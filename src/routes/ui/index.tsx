import { component$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="p-1 text-slate-50">Components written in React and Qwik</div>
  );
});

export const head: DocumentHead = {
  title: "React Components",
  meta: [
    {
      name: "Components with code",
      content: "React | Qwik",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=no",
    },
  ],
};
