import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { clickEvent, former, VAR } from "~/former";
export default component$(() => {
  const canvasSig = useSignal<HTMLCanvasElement | undefined>(undefined);

  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      VAR.canvasWidth = canvasSig.value!.clientWidth;
      VAR.canvasHeight = canvasSig.value!.clientHeight;
      canvasSig.value!.height = canvasSig.value!.clientHeight;
      canvasSig.value!.width = canvasSig.value!.clientWidth;
      const ctx = canvasSig.value!.getContext("2d")!;
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);
      const audioCtx = new AudioContext();
      console.log(audioCtx);
      canvasSig.value?.addEventListener("click", (e) => {
        clickEvent(e, canvasSig.value!, audioCtx);
      });
      former(ctx, audioCtx);
    }),
  );
  return (
    <main class="flex flex-col place-items-center justify-around text-white">
      <div class="former-wrapper">
        <canvas ref={canvasSig} class="former"></canvas>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Hei på dei",
  meta: [
    {
      name: "description",
      content: "Hjemmeside, homesite",
    },
  ],
};

{
  /* <h1 class="text-2xl">Ole Martin</h1>
        <p class="text-xl">Nett utvikler</p>
        <div class="mx-auto h-1 w-3/4 border-b border-slate-200"></div>
        <div class=" text-lgd text-gray-400">
          <ul>
            <li>TypeScript</li>
            <li>Go-lang</li>
            <li>React | Qwik | Next</li>
            <a class="m-0 p-0 text-sm" href="https://handlelista.no">
              www.handlelista.no
            </a>
          </ul>
        </div> */
}
