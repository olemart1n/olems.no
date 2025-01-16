import { Container, type Texture } from "pixi.js";
import { NUMBER_OF_COLUMNS } from "..";
import { Brick } from "../brick";
import { game } from "../index";
import Alea from "alea";
// ALEA
const seed = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
const random = Alea(seed); // Create a seeded random number generator

export const createAndFillContainers = (textures: Texture[]): Container[] => {
  const containers: Container[] = [];

  for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
    const container = new Container();

    // BRICK ARE DRAWN FORM BOTTOM UPPWARDS
    for (let j = 8; j >= 0; j--) {
      const randomIndex = Math.floor(random() * 4);
      const actualIndex = 8 - j;
      const texture = textures[randomIndex];

      const brick = new Brick(texture);

      // POSITION THE BRICKS
      brick.x = game.columnWidth / 2;
      brick.y = game.rowHeight * j + game.rowHeight / 2;
      brick.anchor.set(0.5); // Center the brick
      brick.brickGroup = randomIndex;
      brick.columnIndex = i;
      brick.indexInColumn = actualIndex;

      container.addChild(brick);
    }
    containers.push(container);
  }

  return containers;
};
