import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const LineTwo = component$(() => {
  const loc = useLocation();
  return (
    <nav class="z-0 flex  w-full justify-around">
      <div
        class={
          "bg-yellow-200 p-1  " +
          (loc.prevUrl?.pathname.includes("chat") && "bg-blue-400 underline")
        }
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
      >
        <a
          href="/chat"
          class=" background-color px-6 py-1 font-extralight text-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
        >
          Chat
        </a>
      </div>

      <div
        class={
          "bg-yellow-200 p-1 " +
          (loc.prevUrl?.pathname.includes("blog") && "bg-blue-400 underline")
        }
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
      >
        <a
          href="/blog"
          class=" background-color px-6 py-1 font-extralight text-white"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
        >
          Blog
        </a>
      </div>
    </nav>
  );
});
