import { colors } from "../../";
import { Graphics } from "pixi.js";

export const orange = (width: number, height: number, halfMargin: number) => {
  const orangeBrick = new Graphics().fill(
    `rgb(${colors.orange.r}, ${colors.orange.g}, ${colors.orange.b})`,
  );
  orangeBrick
    .beginPath()
    .moveTo(halfMargin, 0 + halfMargin)
    .lineTo(width - 32, halfMargin)
    .arcTo(width - 18, 0 + halfMargin, width, height - halfMargin, 15)
    .lineTo(width - halfMargin, height - halfMargin)
    .lineTo(18, height - halfMargin);

  orangeBrick.fill();

  return orangeBrick;
};
