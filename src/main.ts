import "./style.css";
import "./assets/socials.ts";

import { Application, type Texture } from "pixi.js";

import {
    NUMBER_OF_COLUMNS,
    NUMBER_OF_ROWS,
    game,
    iterations,
    brickTextures,
} from "./pixi";

const gameCanvasContainer: HTMLDivElement | null = document.querySelector(
    "#gameCanvasContainer",
);
const moves = { count: 0 };
const restartButton: HTMLButtonElement =
    document.querySelector("#restartButton")!;

const updateResolution = () => {
    game.app!.renderer.resolution = window.devicePixelRatio;

    game.rowHeight = game.app!.screen.height / NUMBER_OF_ROWS;
    game.columnWidth = game.app!.screen.width / NUMBER_OF_COLUMNS;
};

game.app = new Application();

await game.app.init({
    resizeTo: gameCanvasContainer!,
    backgroundAlpha: 0,
    antialias: true,
});

updateResolution();

window.addEventListener("resize", updateResolution);
gameCanvasContainer!.appendChild(game.app.canvas);

const textures = brickTextures();

const containers = iterations.createAndFillContainers(textures as Texture[]);

containers.forEach((container, i) => {
    container.x = game.columnWidth * i;
    container.y = 0;

    game.app?.stage.addChild(container);
});

iterations.animateIntro();

game.app.canvas.addEventListener("click", () => {
    moves.count++;

    document.querySelector("#moves")!.innerHTML = moves.count.toString();
});

game.ticker = game.app.ticker;
restartButton.addEventListener("click", () => {
    document.querySelector("#moves")!.innerHTML = "0";
    moves.count = 0;
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
