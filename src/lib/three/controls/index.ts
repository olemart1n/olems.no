import { type Direction } from "../state";

export function controls(direction: Direction) {
  document.onkeydown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        direction.left = true;
        break;
      case "ArrowRight":
        direction.right = true;
        break;
      case "ArrowUp":
        direction.forward = true;

        break;
      case "ArrowDown":
        direction.reverse = true;
        break;
    }
  };

  document.onkeyup = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        direction.left = false;
        break;
      case "ArrowRight":
        direction.right = false;
        break;
      case "ArrowUp":
        direction.forward = false;
        break;
      case "ArrowDown":
        direction.reverse = false;
        break;
    }
  };
}
