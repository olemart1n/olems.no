import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
export const LineTwo = component$(() => {
  const loc = useLocation();
  return (
    <nav class="z-0 flex  w-full justify-around">
      <div
        class={
          "p-1 " +
          (loc.prevUrl?.pathname.includes("chat")
            ? " bg-blue-200"
            : "bg-yellow-200")
        }
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
      >
        <a
          href="/chat"
          class={
            " background-color px-6 py-1 text-white " +
            (loc.prevUrl?.pathname.includes("chat") && "waveFade")
          }
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
        >
          Chat
        </a>
      </div>

      <div
        class={
          "p-1 " +
          (loc.prevUrl?.pathname.includes("blog")
            ? "bg-blue-200"
            : "bg-yellow-200")
        }
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
        }}
      >
        <a
          href="/blog"
          class={
            " background-color px-6 py-1 font-extralight text-white " +
            (loc.prevUrl?.pathname.includes("blog") && "waveFade")
          }
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
