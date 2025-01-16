import { game } from "../";
import { graphics } from "./graphics";

export const brickTextures = () => {
  const width = game.columnWidth;
  const height = game.rowHeight;
  const margin = game.app!.screen.width < 500 ? 5 : 10;
  const { b, p, g, o } = graphics(width, height, margin); //

  const blue = game.app!.renderer.generateTexture(b);
  const pink = game.app!.renderer.generateTexture(p);
  const orange = game.app!.renderer.generateTexture(o);
  const green = game.app!.renderer.generateTexture(g);

  return [blue, pink, orange, green];
};
