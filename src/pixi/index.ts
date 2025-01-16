import { type Application, type Ticker } from "pixi.js";
import { type Brick } from "./brick";
import { brickTextures } from "./brick-textures";
import { iterations } from "./iterations";
export { iterations, brickTextures };
export const NUMBER_OF_COLUMNS = 7;
export const NUMBER_OF_ROWS = 9;

export const colors = {
  blue: {
    r: 53,
    g: 177,
    b: 231,
  },
  //0xf958ab
  pink: {
    r: 249,
    g: 88,
    b: 171,
  },
  green: {
    r: 119,
    g: 204,
    b: 119,
  },
  orange: {
    r: 255,
    g: 156,
    b: 84,
  },
};

interface PixiGame {
  app: Application | null;
  columnWidth: number;
  rowHeight: number;
  ticker: Ticker | null;
}
export const game: PixiGame = {
  app: null,
  columnWidth: 0,
  rowHeight: 0,
  ticker: null,
};

interface Bricks {
  setToDestroy: Brick[];
  setToFall: Brick[];
  jumping: Brick[];
  isJumping: boolean;
  intro: Brick[];
}
export const bricks: Bricks = {
  setToDestroy: [],
  setToFall: [],
  jumping: [],
  isJumping: false,
  intro: [],
};
