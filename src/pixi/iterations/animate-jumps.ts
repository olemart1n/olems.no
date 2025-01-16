import { bricks, game } from "../index";

export const animateJumps = () => {
  if (bricks.jumping.length === 0) {
    game.app!.ticker.remove(animateJumps);
    bricks.isJumping = false;
    return;
  }
  bricks.jumping.forEach((brick) => {
    brick.jumpEffect();
  });
};
