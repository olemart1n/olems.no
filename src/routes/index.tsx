import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Application, type Texture } from "pixi.js";

import {
  pixi,
  NUMBER_OF_COLUMNS,
  NUMBER_OF_ROWS,
  fillGrid,
  brickTextures,
} from "~/pixi";
export default component$(() => {
  const div = useSignal<HTMLDivElement | undefined>(undefined);

  useOnDocument(
    "DOMContentLoaded",
    $(async () => {
      const dpr = window.devicePixelRatio;
      pixi.app = new Application();
      console.log(div.value);
      await pixi.app.init({
        width: div.value!.clientWidth,
        height: div.value!.clientWidth * 1.3,
        backgroundColor: 0x18062e,
        antialias: true,
        resolution: dpr,
      });

      div.value?.appendChild(pixi.app.canvas);
      pixi.rowHeight = pixi.app.screen.height / NUMBER_OF_ROWS;
      pixi.columnWidth = pixi.app.screen.width / NUMBER_OF_COLUMNS;
      pixi.ticker = pixi.app.ticker;
      const textures = brickTextures();
      fillGrid(textures as Texture[]);
    }),
  );
  return (
    <main class="flex flex-col place-items-center  text-white">
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
