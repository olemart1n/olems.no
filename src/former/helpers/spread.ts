import { getSurroundingBricks } from "./get-surrounding-bricks";
import type { Brick } from "../brick/brick";
import { VAR } from "../variables";
export const spread = (brick: Brick) => {
  const surroundingBricks = getSurroundingBricks(brick);
  const color = brick.color;
  // LOOP THROUGH SURROUNDING BRICKS

  surroundingBricks.forEach((surroundingBrick) => {
    if (surroundingBrick?.color === color && !surroundingBrick.isSetToRemoval) {
      surroundingBrick.isSetToRemoval = true;
      VAR.bricksSetToRemoval.push(surroundingBrick);
      spread(surroundingBrick);
    }
  });
};
