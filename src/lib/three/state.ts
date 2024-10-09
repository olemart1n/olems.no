export type CarData = {
  speed: number;
  acceleration: number;
  friction: number;
  angle: number;
  direction: Direction;
  maxSpeed: number;
};

export interface Direction {
  left: boolean;
  right: boolean;
  reverse: boolean;
  forward: boolean;
}
export const carData: CarData = {
  speed: 0,
  acceleration: 0.05,
  friction: 0.01,
  angle: 0,
  maxSpeed: 0.15,
  direction: {
    left: false,
    right: false,
    reverse: false,
    forward: false,
  },
};
