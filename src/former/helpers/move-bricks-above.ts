import type { Brick } from "../brick/brick";
import { VAR } from "../variables";
export const moveBricksAbove = (brick: Brick) => {
  const { colIndex, indexInColumn } = brick;
  for (let i = indexInColumn; i > 0; i--) {
    const brickToMove = VAR.grid[colIndex][i - 1];
    if (brickToMove) {
      brickToMove.pxToMoveDown += brick.height;
    }
  }
};
