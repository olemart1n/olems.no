import { type Application, Sprite, type Texture, type Ticker } from "pixi.js";
import { fillGrid } from "./fill-grid";
import { brickTextures } from "./brick-textures";
export { fillGrid, brickTextures };
interface Bricks {
  toDestroy: BrickSprite[];
  setToFall: BrickSprite[];
}
interface Pixi {
  app: Application | null;
  ticker: Ticker | null;
  columnWidth: number;
  rowHeight: number;
  bricks: Bricks;
}
export const pixi: Pixi = {
  app: null,
  ticker: null,
  columnWidth: 0,
  rowHeight: 0,
  bricks: {
    toDestroy: [],
    setToFall: [],
  },
};

export const NUMBER_OF_COLUMNS = 7;
export const NUMBER_OF_ROWS = 9;
export const colors = {
  blue: 0x35b1e7,
  pink: 0xf958ab,
  green: 0x5dc479,
  orange: 0xff9c54,
};

export class BrickSprite extends Sprite {
  isSetToDestroy: boolean;
  brickGroup: number;
  columnIndex: number;
  indexInColumn: number;
  pxAmountToFall: number;
  speed: number;
  acceleration: number;
  falldown: () => void;
  constructor(texture: Texture) {
    super(texture);
    this.isSetToDestroy = false;
    this.brickGroup = 0;
    this.columnIndex = 0;
    this.indexInColumn = 0;
    this.pxAmountToFall = 0;
    this.speed = 1.5;
    this.acceleration = 0.04;
    this.falldown = () => {
      this.speed += this.acceleration;
      const moveBy = Math.min(this.speed, this.pxAmountToFall);
      this.y += moveBy;
      this.pxAmountToFall -= moveBy;
      if (this.pxAmountToFall <= 0) {
        this.pxAmountToFall = 0;
        this.speed = 1;
        const index = pixi.bricks.setToFall.indexOf(this);
        if (index !== -1) {
          pixi.bricks.setToFall.splice(index, 1);
        }
      }
    };
  }
}
