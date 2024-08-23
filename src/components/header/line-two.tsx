import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export const LineTwo = component$(() => {
  return (
    <nav class="my-1 flex w-full justify-around">
      <Link
        href="/chat"
        class="rounded-sm bg-teal-700 px-5 py-1 font-extralight text-white"
      >
        Chat
      </Link>

      <Link
        href="/blog"
        class="rounded-sm bg-teal-700 px-5 py-1 font-extralight text-white"
      >
        Blog
      </Link>
    </nav>
  );
});
