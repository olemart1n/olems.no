import type { Coordinates } from "./types";

export class Track {
  center: Coordinates;
  radius: number;
  period: number;
  constructor(center: Coordinates, radius: number) {
    this.center = center;
    this.radius = radius;
    this.period = Math.PI;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    for (let i = 0; i < Math.PI; i += 0.5) {
      const { x, y } = this.getPosition(i);
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
  }

  getPosition(offset: number): Coordinates {
    return {
      x: this.center.x + Math.cos(offset) * this.radius,
      y: this.center.y - Math.sin(offset) * this.radius,
    };
  }
}
