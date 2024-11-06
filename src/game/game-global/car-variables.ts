export interface Direction {
  left: boolean;
  right: boolean;
  reverse: boolean;
  forward: boolean;
}
export const carVariables: CarVariablesProps = {
  speed: 0,
  acceleration: 0.02,
  friction: 0.01,
  angle: 0,
  maxSpeed: 0.2,
  direction: {
    left: false,
    right: false,
    reverse: false,
    forward: false,
  },
};
export type CarVariablesProps = {
  speed: number;
  acceleration: number;
  friction: number;
  angle: number;
  direction: Direction;
  maxSpeed: number;
};
