import { type Brick } from "../brick";
import { game } from "..";

export const animateIntro = () => {
  const bricksIntroArr: Brick[] = [];

  let index = 0;
  const introInterval = setInterval(() => {
    game.app!.stage.children.forEach((child) => {
      bricksIntroArr.push(child.children[index] as Brick);
    });
    index++;
    if (index === 9) clearInterval(introInterval);
  }, 150);

  const runIntro = () => {
    bricksIntroArr.forEach((brick) => {
      brick.intro();
    });
  };

  game.app!.ticker!.add(runIntro);
  setTimeout(() => {
    game.ticker!.remove(runIntro);
  }, 2500);
};
