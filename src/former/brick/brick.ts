import { playBrickFallSound } from "../audio";

export class Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  colIndex: number;
  indexInColumn: number;
  color: string;
  offsetX: number;
  offsetY: number;
  margin: number;
  isSetToRemoval: boolean;
  pxToMoveDown: number;
  speed: number;
  acceleration: number;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    colIndex: number,
    indexInColumn: number,
    color: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.colIndex = colIndex;
    this.indexInColumn = indexInColumn;
    this.color = color;
    //

    this.offsetX = this.width / 2;
    this.offsetY = this.height / 2;
    this.margin = 5;

    //
    this.isSetToRemoval = false;

    //
    this.pxToMoveDown = 0;
    this.speed = 0;
    this.acceleration = 0.5;
  }

  fallDown(audioCtx: AudioContext) {
    this.speed += this.acceleration;
    const moveBy = Math.min(this.speed, this.pxToMoveDown);
    this.y += moveBy;
    this.pxToMoveDown -= moveBy;
    if (this.pxToMoveDown <= 0) {
      playBrickFallSound(audioCtx);
      this.pxToMoveDown = 0;
      this.speed = 0; // Reset speed when the brick reaches its destination
    }
  }

  drawRemovedBrick(ctx: CanvasRenderingContext2D) {
    ctx.translate(this.offsetX, this.offsetY);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.resetTransform();
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.translate(this.offsetX, this.offsetY);
    switch (this.color) {
      // PINK
      case "#f958ab":
        this._pink(ctx);
        break;
      // BLUE
      case "#35b1e7":
        this._blue(ctx);
        break;
      // GREEN
      case "#5dc479":
        this._green(ctx);
        break;
      case "orange":
        this._orange(ctx);
        break;
      default:
        ctx.fillStyle = "black";
    }
    ctx.resetTransform();
  }

  _orange(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(
      this.x - this.offsetX + this.margin,
      this.y - this.offsetY + this.margin,
    );
    ctx.lineTo(this.x + this.offsetX - 25, this.y - this.offsetY + this.margin);
    ctx.arcTo(
      this.x + this.offsetX - 15,
      this.y - this.offsetY + this.margin,
      this.x + this.offsetX - this.margin,
      this.y + this.offsetY - this.margin,
      8,
    );
    ctx.lineTo(
      this.x + this.offsetX - this.margin,
      this.y + this.offsetY - this.margin,
    ); // BOTTOM RIGHT
    ctx.lineTo(this.x - this.offsetX + 15, this.y + this.offsetY - this.margin);
    ctx.closePath();
    ctx.strokeStyle = "transparent";
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  }

  _pink(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#f958ab";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width / 2 - 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  }

  _blue(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#35b1e7";
    ctx.beginPath();
    ctx.roundRect(
      this.x - this.offsetX + this.margin,
      this.y - this.offsetY + this.margin,
      this.width - this.margin * 2,
      this.height - this.margin * 2,
      [1, 1],
    );
    ctx.stroke();
    ctx.fill();
  }

  _green(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#5dc479";
    ctx.beginPath();
    ctx.moveTo(
      this.x - this.offsetX + this.margin + 15,
      this.y - this.offsetY + this.margin,
    );
    ctx.lineTo(
      this.x + this.offsetX - this.margin,
      this.y - this.offsetY + this.margin,
    );
    // ctx.lineTo(x + 12, y);
    ctx.arcTo(
      this.x + 12,
      this.y,
      this.x + this.offsetX - this.margin,
      this.y + this.offsetY - this.margin,
      8,
    );
    ctx.lineTo(
      this.x + this.offsetX - this.margin,
      this.y + this.offsetY - this.margin,
    );
    ctx.lineTo(
      this.x - this.offsetX + this.margin + 15,
      this.y + this.offsetY - this.margin,
    );
    ctx.arcTo(
      this.x - this.offsetX + this.margin,
      this.y,
      this.x - this.offsetX + this.margin + 15,
      this.y - this.offsetY + this.margin,
      10,
    );
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
  }
}
