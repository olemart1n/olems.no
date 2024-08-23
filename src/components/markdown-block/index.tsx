import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";

export const MarkdownBlock = component$(({ content }: { content: string }) => {
  const sig = useSignal<string>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ track }) => {
    track(() => content);
    const parser = new DOMParser();
    const newContent = await highlightCode(content);
    const doc = parser.parseFromString(newContent, "text/html");
    const spans = doc.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      // Add a class to the span
      spans[i].classList.add("overflow-x-auto");
      spans[i].classList.add("scrollbar-hide");
    }

    sig.value = doc.documentElement.innerHTML;
  });
  return (
    <div
      dangerouslySetInnerHTML={sig.value}
      class="markdown-block overflow-x-hidden "
    ></div>
  );
});

export async function highlightCode(code: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-dark",
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
