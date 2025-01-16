import { blue } from "./blue";
import { pink } from "./pink";
import { green } from "./green";
import { orange } from "./orange";

export const graphics = (width: number, height: number, margin: number) => {
  const halfMargin = margin / 2;

  const b = blue(width, height, margin);
  const p = pink(width, height, halfMargin);
  const g = green(width, height, halfMargin);
  const o = orange(width, height, halfMargin);
  return { b, p, g, o };
};
