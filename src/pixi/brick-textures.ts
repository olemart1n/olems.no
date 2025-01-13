import { Graphics } from "pixi.js";
import { colors, pixi } from "./index";
export const brickTextures = () => {
  const width = pixi.columnWidth;
  const height = pixi.rowHeight;
  const margin = pixi.app!.screen.width > 400 ? 10 : 6;
  const halfMargin = margin / 2;

  const blueBrick = new Graphics().fill(colors.blue);
  blueBrick.rect(0, 0, width - margin, height - margin);
  blueBrick.fill();

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
    .stroke(colors.green)
    .fill(colors.green);

  const orangeBrick = new Graphics().fill(colors.orange);
  orangeBrick
    .beginPath()
    .moveTo(halfMargin, 0 + halfMargin)
    .lineTo(width - 32, halfMargin)
    .arcTo(width - 18, 0 + halfMargin, width, height - halfMargin, 15)
    .lineTo(width - halfMargin, height - halfMargin)
    .lineTo(18, height - halfMargin);

  orangeBrick.fill();

  const pinkBrick = new Graphics()
    .circle(0, 0, width / 2 - halfMargin)
    .fill(colors.pink);

  const blue = pixi.app?.renderer.generateTexture(blueBrick);
  const pink = pixi.app?.renderer.generateTexture(pinkBrick);
  const orange = pixi.app?.renderer.generateTexture(orangeBrick);
  const green = pixi.app?.renderer.generateTexture(greenBrick);

  return [blue, pink, orange, green];
};
