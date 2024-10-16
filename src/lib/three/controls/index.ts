
import { carData } from "../state";
export function controls() {
  document.onkeydown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        carData.direction.left = true;
        break;
      case "ArrowRight":
        carData.direction.right = true;
        break;
      case "ArrowUp":
        carData.direction.forward = true;

        break;
      case "ArrowDown":
        carData.direction.reverse = true;
        break;
    }
  };

  document.onkeyup = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        carData.direction.left = false;
        break;
      case "ArrowRight":
        carData.direction.right = false;
        break;
      case "ArrowUp":
        carData.direction.forward = false;
        break;
      case "ArrowDown":
        carData.direction.reverse = false;
        break;
    }
  };
}
