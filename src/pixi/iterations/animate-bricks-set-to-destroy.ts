import { bricks, game } from "../index";
import { animateFallingBricks } from "./animate-falling-bricks";
import { updateFalledBricksIndex } from "./update-falled-bricks-index";
export const animateBricksSetToDestroy = () => {
  if (bricks.setToDestroy.length === 0) {
    game.app!.ticker.remove(animateBricksSetToDestroy);
    game.app!.ticker.add(animateFallingBricks);
    updateFalledBricksIndex();
  }

  for (let i = 0; i < bricks.setToDestroy.length; i++) {
    bricks.setToDestroy[i].animateDestroy();
  }
};
