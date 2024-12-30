import { VAR } from "./variables";
import { fillGridWithBricks } from "./helpers/fill-grid-with-bricks";
import { clickEvent } from "./click-event";
function former(ctx: CanvasRenderingContext2D, audioCtx: AudioContext) {
  fillGridWithBricks();

  const animate = () => {
    ctx!.clearRect(0, 0, VAR.canvasWidth, VAR.canvasHeight);
    requestAnimationFrame(animate);
    for (let i = 0; i < VAR.COLUMNS_NUM; i++) {
      VAR.grid[i].forEach((brick) => {
        if (!brick) return;
        if (brick.pxToMoveDown > 0) brick.fallDown(audioCtx);
        brick.draw(ctx);
      });
    }
  };
  animate();
}

export { former, VAR, clickEvent };
