import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Application, type Texture } from "pixi.js";
import { LuRotateCcw } from "@qwikest/icons/lucide";
import {
    NUMBER_OF_COLUMNS,
    NUMBER_OF_ROWS,
    game,
    iterations,
    brickTextures,
} from "~/pixi";
export default component$(() => {
    const divSig = useSignal<HTMLDivElement | undefined>(undefined);
    const moves = useSignal(0);
    const restartBtnSig = useSignal<HTMLButtonElement>();

    useOnDocument(
        "DOMContentLoaded",
        $(async () => {
            const width = divSig.value!.clientWidth;

            const updateResolution = () => {
                const dpr = window.devicePixelRatio;
                const width = divSig.value!.clientWidth;
                const resolution = Math.min(
                    dpr,
                    window.innerWidth / width,
                    (window.innerWidth / width) * 1.25,
                );

                game.app!.renderer.resolution = resolution;

                game.rowHeight = game.app!.screen.height / NUMBER_OF_ROWS;
                game.columnWidth = game.app!.screen.width / NUMBER_OF_COLUMNS;
            };
            game.app = new Application();

            await game.app.init({
                width: width - width / 10,
                height: (width - width / 10) * 1.25,
                backgroundColor: 0x18062e, // rgb(24, 6, 46)
                antialias: true,
            });

            updateResolution();
            // window.addEventListener("resize", updateResolution);
            divSig.value?.appendChild(game.app.canvas);

            const textures = brickTextures();

            const containers = iterations.createAndFillContainers(
                textures as Texture[],
            );

            containers.forEach((container, i) => {
                container.x = game.columnWidth * i;
                container.y = 0;

                game.app?.stage.addChild(container);
            });

            iterations.animateIntro();

            game.app.canvas.addEventListener("click", () => {
                moves.value++;
            });

            game.ticker = game.app.ticker;
            restartBtnSig.value?.addEventListener("click", () => {
                moves.value = 0;
                game.app!.stage.removeChildren();
                iterations.createAndFillContainers(textures as Texture[]);

                const containers = iterations.createAndFillContainers(
                    textures as Texture[],
                );
                containers.forEach((container, i) => {
                    container.x = game.columnWidth * i;
                    container.y = 0;

                    game.app?.stage.addChild(container);
                });
                iterations.animateIntro();
            });
        }),
    );

    return (
        <main class="bg-purple-custom flex flex-col  place-items-center text-white">
            <div class=" flex h-1/5 w-full items-center justify-evenly font-semibold md:w-1/2">
                <div class="flex w-fit flex-col text-center">
                    <h3 class=" text-center text-sm">TREKK</h3>
                    <p class="h-8 w-14 rounded-sm border-2 border-slate-100 bg-cyan-500 text-lg">
                        {moves.value}
                    </p>
                </div>
                <div class="flex w-fit flex-col text-center">
                    <h3 class="  text-sm">RESTART</h3>
                    <button
                        class="h-8 w-14 rounded-full border-2 border-yellow-300 text-lg hover:bg-slate-500"
                        ref={restartBtnSig}
                    >
                        <LuRotateCcw class="m-auto inline-block text-2xl" />
                    </button>
                </div>
            </div>{" "}
            <div ref={divSig} class="w-full max-w-3xl md:w-1/3 "></div>
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
