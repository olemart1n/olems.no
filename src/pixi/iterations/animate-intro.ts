import { type Brick } from "../brick";
import { game, bricks } from "..";

export const animateIntro = () => {
  game.app!.stage.children.forEach((child) => {
    bricks.intro.push(child.children[0] as Brick);
  });
  let index = 1;
  const introInterval = setInterval(() => {
    game.app!.stage.children.forEach((child) => {
      bricks.intro.push(child.children[index] as Brick);
    });
    index++;
    if (index === 9) clearInterval(introInterval);
  }, 150);

  const runIntro = () => {
    if (bricks.intro.length === 0) {
      game.ticker!.remove(runIntro);
      return;
    }
    bricks.intro.forEach((brick) => {
      brick.intro();
    });
  };

  game.app!.ticker!.add(runIntro);
};
