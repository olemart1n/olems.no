import type { CarDataProps } from "~/game/game-global";
import type * as THREE from "three";
export const setPlayerWheels = (car: THREE.Group, payload: CarDataProps) => {
  car.children[0].position.y = payload.wheelsPos.frontLeft.y;
  car.children[1].position.y = payload.wheelsPos.frontRight.y;
  car.children[2].position.y = payload.wheelsPos.rearLeft.y;
  car.children[3].position.y = payload.wheelsPos.rearRight.y;
};
