import { type BrickSprite, pixi } from "../index";
import { spread } from "./spread";
import { findBricksAbove } from "./find-bricks-above";

export const brickClickEvent = (brick: BrickSprite) => {
  pixi.bricks.toDestroy.push(brick);
  brick.isSetToDestroy = true;

  spread(brick);

  pixi.bricks.toDestroy.forEach((brick) => {
    findBricksAbove(brick);
  });
  const move = () => {
    pixi.bricks.setToFall.forEach((brick) => {
      brick.falldown();
    });
    if (pixi.bricks.setToFall.length === 0) pixi.ticker!.remove(move);
  };
  pixi.ticker!.add(move);

  pixi.bricks.toDestroy.forEach((brick) => {
    brick.destroy();
  });
  pixi.bricks.setToFall.forEach((brick) => {
    const newIndex =
      pixi.app!.stage.children[brick.columnIndex].getChildIndex(brick);
    brick.indexInColumn = newIndex;
  });
  pixi.bricks.toDestroy = [];
};
