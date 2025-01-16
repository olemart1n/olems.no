import { colors } from "../../";
import { Graphics } from "pixi.js";

export const pink = (width: number, height: number, halfMargin: number) => {
  const pinkBrick = new Graphics()
    .circle(0, 0, width / 2 - halfMargin)
    .fill(`rgb(${colors.pink.r}, ${colors.pink.g}, ${colors.pink.b})`);
  return pinkBrick;
};
