import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const Internal = component$(() => {
  const loc = useLocation();
  return (
    <>
      <a
        href="/car-game"
        class={
          "block w-32 rounded-sm py-1 text-center hover:outline hover:outline-amber-300 " +
          (loc.prevUrl?.pathname.includes("car-game") &&
            " outline outline-amber-300")
        }
      >
        Game
      </a>

      <a
        href="/chat"
        class={
          "block w-32 rounded-sm py-1 text-center hover:outline hover:outline-amber-300 " +
          (loc.prevUrl?.pathname.includes("chat") &&
            " outline outline-amber-300")
        }
      >
        Chat
      </a>
    </>
  );
});
