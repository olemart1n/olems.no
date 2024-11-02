import { component$, useSignal } from "@builder.io/qwik";

import { MarkdownBlock } from "~/components/markdown-block";
import mdGoFiles from "./md";
import { server$ } from "@builder.io/qwik-city";

const serverGetMdGo = server$((index: number) => {
  return mdGoFiles[index].content;
});

export const GoServerShowcase = component$(() => {
  const tabIndex = useSignal(0);
  const content = useSignal(mdGoFiles[0].content);
  return (
    <>
      <div class="flex w-full flex-wrap justify-around">
        {mdGoFiles.map((file, index) => (
          <button
            key={index}
            class={`rounded-sm p-1 ${tabIndex.value === index ? "bg-slate-300 text-slate-950" : ""}`}
            onClick$={async () => {
              tabIndex.value = index;
              content.value = await serverGetMdGo(index);
            }}
          >
            {file.name}
          </button>
        ))}
      </div>
      <div class="relative w-full overflow-x-scroll">
        <MarkdownBlock content={content.value} />
      </div>
    </>
  );
});
