

import { carData, carVariables } from "../state";
export function controls() {

  document.onkeydown = (e) => {
    switch (e.key) {
      case "a":
        carVariables.direction.left = true;
        break;
      case "d":
        carVariables.direction.right = true;
        break;
      case "w":
        carVariables.direction.forward = true;

        break;
      case "s":
        carVariables.direction.reverse = true;
        break;
    }
  };

  document.onkeyup = (e) => {
    switch (e.key) {
      case "a":
        carVariables.direction.left = false;
        break;
      case "d":
        carVariables.direction.right = false;
        break;
      case "w":
        carVariables.direction.forward = false;
        break;
      case "s":
        carVariables.direction.reverse = false;
        break;
    }
  };
  document.oncontextmenu = (e) => e.preventDefault()
}
