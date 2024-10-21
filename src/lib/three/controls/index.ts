
import { carData, cameraData } from "../state";
export function controls() {
  document.onkeydown = (e) => {
    switch (e.key) {
      case "a":
        carData.direction.left = true;
        break;
      case "d":
        carData.direction.right = true;
        break;
      case "w":
        carData.direction.forward = true;

        break;
      case "s":
        carData.direction.reverse = true;
        break;
    }
  };

  document.onkeyup = (e) => {
    switch (e.key) {
      case "a":
        carData.direction.left = false;
        break;
      case "d":
        carData.direction.right = false;
        break;
      case "w":
        carData.direction.forward = false;
        break;
      case "s":
        carData.direction.reverse = false;
        break;
    }
  };

}
