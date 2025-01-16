import { colors } from "../../";
import { Graphics } from "pixi.js";

export const orange = (width: number, height: number, halfMargin: number) => {
  const orangeBrick = new Graphics().fill(
    `rgb(${colors.orange.r}, ${colors.orange.g}, ${colors.orange.b})`,
  );
  orangeBrick
    .beginPath()
    .moveTo(halfMargin, 0 + halfMargin)
    .lineTo(width - halfMargin * 6, halfMargin)
    .arcTo(
      width - halfMargin * 5,
      0 + halfMargin,
      width,
      height - halfMargin,
      8,
    )
    .lineTo(width - halfMargin, height - halfMargin)
    .lineTo(halfMargin * 5, height - halfMargin);

  orangeBrick.fill();

  return orangeBrick;
};
