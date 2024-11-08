import type { CarDataProps } from "~/game/game-global";
import type * as THREE from "three";
export const setPlayerCar = (car: THREE.Group, payload: CarDataProps) => {
  // SET CAR'S POSITION AND ROTATION
  car.position.copy(payload.carPositionVector);
  car.lookAt(car.position.clone().add(payload.carDirectionVector));
};
