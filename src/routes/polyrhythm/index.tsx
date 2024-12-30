import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { animate } from "~/polyrhythm";
export default component$(() => {
  const canvasSig = useSignal<HTMLCanvasElement>();

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      if (!canvasSig.value) return;
      const size = 700;
      canvasSig.value.height = size / 2 + 5;
      canvasSig.value.width = size;
      const ctx = canvasSig.value.getContext("2d")!;

      const audioCtx = new window.AudioContext();
      animate(ctx, audioCtx);
    }),
  );
  return (
    <main class="flex place-content-center place-items-center">
      <canvas ref={canvasSig} class=" bg-black"></canvas>
    </main>
  );
});
