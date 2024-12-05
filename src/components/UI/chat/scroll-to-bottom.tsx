import type { Signal } from "@builder.io/qwik";

export function scrollToBottom(
  messageEndRef: Signal<HTMLDivElement | undefined>,
) {
  setTimeout(() => {
    messageEndRef.value?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 10);
}
