import { bricks, game } from "../index";

export const updateFalledBricksIndex = () => {
  bricks.setToFall.forEach((brick) => {
    const newIndex =
      game.app!.stage.children[brick.columnIndex].getChildIndex(brick);
    brick.indexInColumn = newIndex;
  });
};
