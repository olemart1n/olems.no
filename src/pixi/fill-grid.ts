import { Container, type Texture } from "pixi.js";
import { brickClickEvent } from "./click-event/brick-click-event";
import Alea from "alea";
import { pixi, BrickSprite, NUMBER_OF_COLUMNS } from "./index";

// ALEA
const seed = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
const random = Alea(seed); // Create a seeded random number generator

export const fillGrid = (textures: Texture[]) => {
  for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
    const container = new Container();
    container.x = pixi.columnWidth * i;
    container.y = 0;
    container.label = `column ${i}`;

    // BRICK ARE DRAWN FORM BOTTOM UPPWARDS
    for (let j = 8; j >= 0; j--) {
      const randomIndex = Math.floor(random() * 4);
      const actualIndex = 8 - j;
      const texture = textures[randomIndex];
      const brick = new BrickSprite(texture);
      brick.x = pixi.columnWidth / 2;
      brick.y = pixi.rowHeight * j + pixi.rowHeight / 2;
      brick.anchor.set(0.5); // Center the brick
      brick.cursor = "pointer";
      brick.interactive = true;
      brick.brickGroup = randomIndex;
      brick.columnIndex = i;
      brick.indexInColumn = actualIndex;

      brick.onpointerdown = () => {
        brickClickEvent(brick);
      };

      container.addChild(brick);
    }

    pixi.app?.stage.addChild(container);
  }
};
