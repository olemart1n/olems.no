import type { Track } from "./track";
import type { Coordinates } from "./types";
export class Ball {
  speed: number;
  radius: number;
  track: Track;
  offset: number;
  center: Coordinates;
  direction: number;
  frequency: number;
  audioCtx: AudioContext;
  constructor(
    track: Track,
    ballspeed: number,
    ballRadius: number,
    audioCtx: AudioContext,
    frequency: number,
  ) {
    this.track = track;
    this.radius = ballRadius;
    this.speed = ballspeed;
    this.offset = 0;
    this.center = this.track.getPosition(this.offset);
    this.direction = 1;
    this.frequency = frequency;
    this.audioCtx = audioCtx;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}
