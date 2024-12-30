import { VAR } from "../variables";
import type { Brick } from "../brick/brick";
export const findClickedBrick = (e: MouseEvent, canvas: HTMLCanvasElement) => {
  const rect = canvas!.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  let clickedBrick: Brick | null = null;

  outerLoop: for (let i = 0; i < VAR.COLUMNS_NUM; i++) {
    for (let j = 0; j < VAR.grid[i].length; j++) {
      const brick = VAR.grid[i][j];
      if (brick === null) continue;

      if (
        x > brick.x &&
        x < brick.x + brick.width &&
        y > brick.y &&
        y < brick.y + brick.height
      ) {
        clickedBrick = brick;
        break outerLoop;
      }
    }
  }

  console.log(clickedBrick);
  return clickedBrick;
};
