import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Application, type Texture } from "pixi.js";
import { LuRotateCcw } from "@qwikest/icons/lucide";
import {
  pixi,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  fillGrid,
  brickTextures,
} from "~/pixi";
export default component$(() => {
  const div = useSignal<HTMLDivElement | undefined>(undefined);
  const moves = useSignal(0);
  const restartBtnSig = useSignal<HTMLButtonElement>();

  useOnDocument(
    "DOMContentLoaded",
    $(async () => {
      const dpr = window.devicePixelRatio;
      pixi.app = new Application();
      const resolution = Math.min(
        dpr,
        window.innerWidth / div.value!.clientWidth,
        (window.innerHeight / div.value!.clientWidth) * 1.3,
      );

      await pixi.app.init({
        width: div.value!.clientWidth,
        height: div.value!.clientWidth * 1.3,
        backgroundColor: 0x18062e,
        antialias: true,
      });
      pixi.app!.renderer.resolution = resolution;
      div.value?.appendChild(pixi.app.canvas);

      pixi.app.canvas.addEventListener("click", () => {
        moves.value++;
      });
      pixi.rowHeight = pixi.app.screen.height / NUMBER_OF_ROWS;
      pixi.columnWidth = pixi.app.screen.width / NUMBER_OF_COLUMNS;
      pixi.ticker = pixi.app.ticker;
      const textures = brickTextures();
      fillGrid(textures as Texture[]);

      restartBtnSig.value?.addEventListener("click", () => {
        moves.value = 0;
        pixi.app!.stage.removeChildren();
        fillGrid(textures as Texture[]);
      });
    }),
  );
  return (
    <main class="flex flex-col place-items-center  text-white">
      <div class=" flex h-full w-full items-center justify-evenly bg-purple-950 font-semibold">
        <div class="flex w-fit flex-col text-center">
          <h3 class=" text-center text-sm">TREKK</h3>
          <p class="h-8 w-14 rounded-sm border-2 border-yellow-600 bg-orange-900 text-lg">
            {moves.value}
          </p>
        </div>
        <div class="flex w-fit flex-col text-center">
          <h3 class="  text-sm">RESTART</h3>
          <button
            class="h-8 w-14 rounded-full border-2 border-yellow-600 bg-orange-900 text-lg"
            ref={restartBtnSig}
          >
            <LuRotateCcw class="m-auto inline-block text-2xl" />
          </button>
        </div>
      </div>
      <div ref={div} id="pixi-div"></div>
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
