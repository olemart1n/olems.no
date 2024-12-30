import type { Brick } from "./brick/brick";

interface Grid {
  [i: number]: (Brick | null)[];
}
const grid: Grid = [[], [], [], [], [], [], []];

const canvasHeight = 0;
const canvasWidth = 0;

const COLUMNS_NUM = 7;
const ROWS_NUM = 9;
// ------------ blue-------- pink ----- green --- orange
const colors = ["#f958ab", "#35b1e7", "#5dc479", "orange"];

const bricksSetToRemoval: Brick[] = [];
export const VAR = {
  grid,
  canvasHeight,
  canvasWidth,
  COLUMNS_NUM,
  ROWS_NUM,
  colors,
  bricksSetToRemoval,
};
