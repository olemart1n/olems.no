import { bricks, game } from "../index";

export const animateFallingBricks = () => {
  if (bricks.setToFall.length === 0) {
    game.app!.ticker.remove(animateFallingBricks);
  }
  // move bricks above the destroyed ones to the bottom of the can
  bricks.setToFall.forEach((brick) => {
    brick.falldown();
  });
};
