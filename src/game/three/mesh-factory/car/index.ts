import * as THREE from "three";
import { wheels } from "./wheels";
import { poles } from "./poles";
import { body } from "./body";

const car = () => {
  const car = new THREE.Group();
  const { pole1, pole2 } = poles();
  car.add(body());
  car.add(pole1);
  car.add(pole2);
  const w = wheels();
  for (const property in w) {
    // @ts-ignore
    car.add(w[property]);
  }

  return car;
};

export { car };
