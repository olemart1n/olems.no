import { colors } from "../../";
import { Graphics } from "pixi.js";

export const green = (width: number, height: number, halfMargin: number) => {
  const greenBrick = new Graphics()
    .beginPath()
    .moveTo(width / 4, 0 + halfMargin)
    // TOP RIGHT
    .lineTo(width - halfMargin, 0 + halfMargin)
    .arcTo(width * 0.67, height / 2, width, height - halfMargin, 6)
    .lineTo(width - halfMargin, height - halfMargin)
    // BOTTOM LEFT
    .lineTo(width / 4, height - halfMargin)
    .arcTo(0, height / 2, width / 4, 0 + halfMargin, 6)
    .closePath()
    // .stroke(colors.green)
    .fill(`rgb(${colors.green.r}, ${colors.green.g}, ${colors.green.b})`);

  return greenBrick;
};
