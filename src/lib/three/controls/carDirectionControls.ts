import { carVariables } from "../state";
export const carDirectionControls = (e: KeyboardEvent) => {
    if(e.type === "keydown"){
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
    }
    if(e.type ==="keyup") {
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
    }
  }
  