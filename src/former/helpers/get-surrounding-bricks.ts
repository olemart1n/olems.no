import { VAR } from "../variables";
import type { Brick } from "../brick/brick";

// REMEMBER TO CHECK IF BRICK IS REMOVED BEFORE ANY ACTION IS DONE
export const getSurroundingBricks = (brick: Brick) => {
  let leftBrick: Brick | null = null;
  let rightBrick: Brick | null = null;
  let upBrick: Brick | null = null;
  let downBrick: Brick | null = null;
  if (brick.colIndex !== 0) {
    leftBrick = VAR.grid[brick.colIndex - 1][brick.indexInColumn];
  }
  if (brick.colIndex !== 6) {
    rightBrick = VAR.grid[brick.colIndex + 1][brick.indexInColumn];
  }
  if (brick.indexInColumn !== 0) {
    upBrick = VAR.grid[brick.colIndex][brick.indexInColumn - 1];
  }
  if (brick.indexInColumn !== 8) {
    downBrick = VAR.grid[brick.colIndex][brick.indexInColumn + 1];
  }
  const bricks = [leftBrick, rightBrick, upBrick, downBrick];
  return bricks;
};
