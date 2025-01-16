import { game, bricks } from "../index";
import type { Brick } from "../brick";

export const setPxToFall = () => {
  bricks.setToDestroy.forEach((brick) => {
    const { columnIndex, indexInColumn } = brick;

    for (
      let i = indexInColumn;
      i < game.app!.stage.children[columnIndex].children.length;
      i++
    ) {
      // if (i === pixi.app!.stage.children[columnIndex].children.length - 1) break;
      const brickToFall = game.app?.stage.children[columnIndex]?.children[
        i
      ] as Brick;

      brickToFall.pxAmountToFall += game.rowHeight;
      if (!brickToFall.isSetToDestroy) {
        bricks.setToFall.push(brickToFall);
      }
    }
  });
};
