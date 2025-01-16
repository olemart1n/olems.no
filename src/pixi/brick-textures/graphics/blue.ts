import { colors } from "../../";
import { Graphics } from "pixi.js";

export const blue = (width: number, height: number, margin: number) => {
  const blueBrick = new Graphics().fill(
    `rgb(${colors.blue.r}, ${colors.blue.g}, ${colors.blue.b})`,
  );
  blueBrick.rect(0, 0, width - margin, height - margin);
  blueBrick.fill();
  return blueBrick;
};
