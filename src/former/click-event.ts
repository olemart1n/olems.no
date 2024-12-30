import { findClickedBrick } from "./helpers/find-clicked-brick";
import { spread } from "./helpers/spread";
import { VAR } from "./variables";
import { moveBricksAbove } from "./helpers/move-bricks-above";
import type { Brick } from "./brick/brick";
import { playBrickPopSound } from "./audio";
export const clickEvent = async (
  e: MouseEvent,
  canvas: HTMLCanvasElement,
  audioCtx: AudioContext,
) => {
  const clickedBrick = findClickedBrick(e, canvas);
  if (!clickedBrick) {
    return;
  }
  // ADD BRICK TO REMOVAL LIST AND SET .isSetToRemoval TO TRUE
  VAR.bricksSetToRemoval.push(clickedBrick);
  clickedBrick.isSetToRemoval = true;

  // DO THE SAME FOR OTHER BRICKS THAT IS SIMILAR TO THE CLICKED BRICK
  spread(clickedBrick);

  let loopIndex = 0;
  for (const brick of VAR.bricksSetToRemoval) {
    if (loopIndex === 0) {
      playBrickPopSound(audioCtx, loopIndex);
      moveBricksAbove(brick);
      unshiftBrick(brick);
    } else {
      await delay(100 - 5 * loopIndex);
      playBrickPopSound(audioCtx, loopIndex);
      moveBricksAbove(brick);
      unshiftBrick(brick);
    }

    loopIndex++;
  }

  VAR.bricksSetToRemoval = [];
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function unshiftBrick(brick: Brick) {
  const col = VAR.grid[brick.colIndex];
  const index = col.indexOf(brick);
  col.splice(index, 1);
  col.unshift(null);
  col.forEach((b, i) => {
    if (b === null) return;
    b.indexInColumn = i;
  });
  VAR.grid[brick.colIndex] = col;
}
