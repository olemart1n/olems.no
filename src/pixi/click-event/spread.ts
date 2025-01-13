import { getSurroundingBricks } from "./get-surrounding-bricks";
import { type BrickSprite, pixi } from "../index";
export const spread = (brick: BrickSprite) => {
  const surroundingBricks = getSurroundingBricks(brick);

  surroundingBricks.forEach((surroundingBrick) => {
    if (!surroundingBrick) return;
    if (
      surroundingBrick.brickGroup === brick.brickGroup &&
      !surroundingBrick.isSetToDestroy
    ) {
      surroundingBrick.isSetToDestroy = true;
      pixi.bricks.toDestroy.push(surroundingBrick);
      spread(surroundingBrick);
    }
  });
};
