import { VAR } from "../variables";
import { Brick } from "../brick/brick";
import Alea from "alea";

export const fillGridWithBricks = () => {
  const bricksColors = [];
  const brickWidth = VAR.canvasWidth / VAR.COLUMNS_NUM;
  const brickHeight = VAR.canvasHeight / VAR.ROWS_NUM;

  // Calculate the seed value based on the current date
  const seed = Math.floor(Date.now() / (24 * 60 * 60 * 1000));
  const random = Alea(seed); // Create a seeded random number generator
  for (let i = 0; i < 63; i++) {
    const randomIndex = Math.floor(random() * VAR.colors.length);
    bricksColors.push(VAR.colors[randomIndex]);
  }

  for (let i = 0; i < VAR.COLUMNS_NUM; i++) {
    for (let j = 0; j < VAR.ROWS_NUM; j++) {
      const brick = new Brick(
        i * brickWidth,
        j * brickHeight,
        brickWidth,
        brickHeight,
        i,
        j,
        bricksColors[i * VAR.ROWS_NUM + j],
      );
      VAR.grid[i].push(brick);
    }
  }
  console.log(VAR.grid);
};
