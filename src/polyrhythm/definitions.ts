import type { Track } from "./track";
import type { Ball } from "./ball";

export const size = 700;

export const trackCenter = { x: size * 0.5, y: size * 0.5 };
export const trackMinRadius = 50;
export const trackStep = 15;
export const ballRadius = 10;
export const ballMinSpeed = 0.01;
export const ballSpeedStep = -0.0001;
export const tracks: Track[] = [];
export const balls: Ball[] = [];
export const N = 20;

export const soundFrequencies = [
  1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880, 783.99, 698.46,
  659.25, 587.33, 523.25, 493.88, 440, 392, 349.23, 329.63, 293.66, 261.63,
];
