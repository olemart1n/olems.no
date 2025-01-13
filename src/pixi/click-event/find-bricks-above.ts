import { type BrickSprite, pixi } from "../index";

export const findBricksAbove = (brick: BrickSprite) => {
  const { columnIndex, indexInColumn } = brick;

  for (
    let i = indexInColumn;
    i < pixi.app!.stage.children[columnIndex].children.length;
    i++
  ) {
    // if (i === pixi.app!.stage.children[columnIndex].children.length - 1) break;
    const brickToFall = pixi.app?.stage.children[columnIndex]?.children[
      i
    ] as BrickSprite;

    brickToFall.pxAmountToFall += pixi.rowHeight;
    if (!brickToFall.isSetToDestroy) {
      pixi.bricks.setToFall.push(brickToFall);
    }
  }
};
