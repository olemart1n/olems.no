import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const Internal = component$(() => {
  const loc = useLocation();
  return (
    <>
      <a
        href="/dapp"
        class={
          "block w-32 rounded-sm py-1 text-center hover:outline hover:outline-amber-300 " +
          (loc.prevUrl?.pathname.includes("dapp") &&
            " outline outline-amber-300")
        }
      >
        dapp
      </a>
      <a
        href="/sui-counter"
        class={
          "block w-32 rounded-sm py-1 text-center hover:outline hover:outline-amber-300 " +
          (loc.prevUrl?.pathname.includes("ui") && " outline outline-amber-300")
        }
      >
        sui-counter
      </a>
    </>
  );
});
