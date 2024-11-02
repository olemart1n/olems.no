import type { Signal } from "@builder.io/qwik";
export function canvas2D(canvas: Signal<HTMLCanvasElement | undefined>) {
  const ctx = canvas.value!.getContext("2d");
  if (!ctx) return;
  canvas.value!.width = 176;
  canvas.value!.height = 88;

  const arrowUp = new ArrowKey("ef");
  arrowUp.draw(ctx, 0, 0, 35, 25, 3);
  const canvasObjects = { arrowUp, ctx };
  return canvasObjects;
}

class ArrowKey {
  innerText: string;
  fillStyle: string;
  constructor(innerText: string) {
    this.innerText = innerText;
    this.fillStyle = "rgb(192, 219, 254)";
  }

  draw(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y); // Start at the top-left corner
    ctx.lineTo(x + width - radius, y); // Top side
    ctx.arcTo(x + width, y, x + width, y + radius, radius); // Top-right corner
    ctx.lineTo(x + width, y + height - radius); // Right side
    ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius); // Bottom-right corner
    ctx.lineTo(x + radius, y + height); // Bottom side
    ctx.arcTo(x, y + height, x, y + height - radius, radius); // Bottom-left corner
    ctx.lineTo(x, y + radius); // Left side
    ctx.arcTo(x, y, x + radius, y, radius); // Top-left corner
    ctx.closePath();
    // Fill and stroke the rectangle
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
  }

  updateColor(ctx: CanvasRenderingContext2D) {
    this.fillStyle = "black";
    this.draw(ctx, 0, 0, 35, 25, 3); // Redraw with new color
  }
}

// if(carData.direction.forward) {
//     canvasObjects?.arrowUp.updateColor(canvasObjects.ctx)
//     canvasObjects?.arrowUp.draw(canvasObjects.ctx, 0, 0, 35, 25, 3)
//   }

{
  /* <canvas
        ref={canvas}
        class="h-22 absolute bottom-10 left-1/2 z-10 w-44 -translate-x-1/2 bg-red-500"
      ></canvas> */
}
