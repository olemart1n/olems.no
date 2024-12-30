import { Ball } from "./ball";
import { Track } from "./track";
import {
  trackCenter,
  trackMinRadius,
  ballRadius,
  size,
  N,
  tracks,
  balls,
  trackStep,
  ballMinSpeed,
  ballSpeedStep,
  soundFrequencies,
} from "./definitions";

export function animate(ctx: CanvasRenderingContext2D, audioCtx: AudioContext) {
  createElements(audioCtx);
  function onEachFrame() {
    ctx.clearRect(0, 0, size, size);

    tracks.forEach((track) => track.draw(ctx));
    balls.forEach((ball) => {
      // ball.move(audioCtx);
      ball.draw(ctx);
    });

    requestAnimationFrame(onEachFrame);
  }
  onEachFrame();
}

const createElements = (audioCtx: AudioContext) => {
  for (let i = 0; i < N; i++) {
    const trackRadius = trackMinRadius + i * trackStep;
    const speed = ballMinSpeed + i * ballSpeedStep;

    const track = new Track(trackCenter, trackRadius);
    const ball = new Ball(
      track,
      speed,
      ballRadius,
      audioCtx,
      soundFrequencies[i],
    );
    tracks.push(track);
    balls.push(ball);
  }
};
