import { pixi, type BrickSprite } from "../index";
export const getSurroundingBricks = (brick: BrickSprite) => {
  const { columnIndex, indexInColumn } = brick;
  const leftBrick = pixi.app?.stage.children[columnIndex - 1]?.children[
    indexInColumn
  ] as BrickSprite | undefined;
  const rightBrick = pixi.app?.stage.children[columnIndex + 1]?.children[
    indexInColumn
  ] as BrickSprite | undefined;
  const upBrick = pixi.app?.stage.children[columnIndex]?.children[
    indexInColumn + 1
  ] as BrickSprite | undefined;
  const downBrick = pixi.app?.stage.children[columnIndex]?.children[
    indexInColumn - 1
  ] as BrickSprite | undefined;
  const bricks = [leftBrick, rightBrick, upBrick, downBrick];

  return bricks;
};
