import { bricks } from "../index";

export const updateBricksSetToFall = () => {
  bricks.setToFall.forEach((brick) => {
    brick.jumpTicker = 0;
    brick.jumpPhase = 0;
    brick.pxToJump = brick.pxAmountToFall / 5;
    brick.jumpStartY = brick.y + brick.pxAmountToFall;
  });
};
