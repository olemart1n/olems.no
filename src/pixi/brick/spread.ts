import { bricks, game } from "../";
import type { Brick } from ".";
const getSurroundingBricks = (brick: Brick) => {
  const { columnIndex, indexInColumn } = brick;
  const leftBrick = game.app!.stage.children[columnIndex - 1]?.children[
    indexInColumn
  ] as Brick | undefined;
  const rightBrick = game.app!.stage.children[columnIndex + 1]?.children[
    indexInColumn
  ] as Brick | undefined;
  const upBrick = game.app!.stage.children[columnIndex]?.children[
    indexInColumn + 1
  ] as Brick | undefined;
  const downBrick = game.app!.stage.children[columnIndex]?.children[
    indexInColumn - 1
  ] as Brick | undefined;
  const bricks = [leftBrick, rightBrick, upBrick, downBrick];

  return bricks;
};

export const spread = (brick: Brick) => {
  const surroundingBricks = getSurroundingBricks(brick);
  surroundingBricks.forEach((surroundingBrick) => {
    if (!surroundingBrick) return;
    if (
      surroundingBrick.brickGroup === brick.brickGroup &&
      !surroundingBrick.isSetToDestroy
    ) {
      surroundingBrick.isSetToDestroy = true;

      bricks.setToDestroy.push(surroundingBrick);
      spread(surroundingBrick);
    }
  });
};
