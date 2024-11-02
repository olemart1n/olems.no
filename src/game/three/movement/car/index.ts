import { carVariables } from "../../../game-global";
import { mesh } from "../../mesh";
import { wheelRaycaster } from "./wheel-raycaster";
import { adjustBody } from "./body";
import { adjustPoles } from "./poles";
const wheels = mesh.wheels;

let wheelRotation = 0;

export function moveCar() {
  // FORWARD
  if (carVariables.direction.forward) {
    carVariables.speed += carVariables.acceleration;
    spinWheels(carVariables.speed);
  }
  // REVERSE
  if (carVariables.direction.reverse) {
    carVariables.speed -= carVariables.acceleration;
    spinWheels(carVariables.speed, false);
  }
  // SPEED IS GREATER THAN MAX SPEED, SET SPEED = MAXSPEED
  if (carVariables.speed > carVariables.maxSpeed) {
    carVariables.speed = carVariables.maxSpeed;
  }
  // IF SPEED IS LESS THAN -MAXSPEED/2 (DRIVING IN REVERSE) SET SPEED TO -MAXSPEED/2
  if (carVariables.speed < -carVariables.maxSpeed / 2) {
    carVariables.speed = -carVariables.maxSpeed / 2;
  }
  // IF SPEED IS GREATER THAN 0, ADD FRICTION TO SPEED
  if (carVariables.speed > 0) {
    carVariables.speed -= carVariables.friction;
  }
  // IF SPEED IS LESS THAN 0, ADD FRICTION TO SPEED
  if (carVariables.speed < 0) {
    carVariables.speed += carVariables.friction;
  }
  // IF SPEED IS LESS THAN FRICTION, SET SPEED TO 0
  if (Math.abs(carVariables.speed) < carVariables.friction) {
    carVariables.speed = 0;
  }

  if (carVariables.speed !== 0) {
    const flip = carVariables.speed > 0 ? 1 : -1;
    if (carVariables.direction.left) {
      carVariables.angle += 0.03 * flip;
      mesh.car.rotateY(0.03 * flip);
    }
    if (carVariables.direction.right) {
      carVariables.angle -= 0.03 * flip;
      mesh.car.rotateY(-0.03 * flip);
    }
  }

  if (carVariables.direction.left && wheelRotation < 1) {
    wheelRotation += 0.01;
    wheels.frontLeft.rotateX(0.02);

    wheels.frontRight.rotateX(0.02);
  }
  if (carVariables.direction.right && wheelRotation > -1) {
    wheelRotation -= 0.01;
    wheels.frontLeft.rotateX(-0.02);
    wheels.frontRight.rotateX(-0.02);
  }

  if (
    !carVariables.direction.right &&
    !carVariables.direction.left &&
    wheelRotation !== 0
  ) {
    wheels.frontLeft.rotation.set(0, 0, Math.PI / 2);
    wheels.frontRight.rotation.set(0, 0, Math.PI / 2);
    wheelRotation = 0;
  }

  mesh.car.position.x -= Math.sin(carVariables.angle) * carVariables.speed;
  mesh.car.position.z -= Math.cos(carVariables.angle) * carVariables.speed;

  adjustBody();
  wheelRaycaster(wheels.frontRight);
  wheelRaycaster(wheels.frontLeft);
  wheelRaycaster(wheels.rearRight);
  wheelRaycaster(wheels.rearLeft);
  adjustPoles();
}

const spinWheels = (speed: number, forward: boolean = true) => {
  wheels.frontRight.children[0].rotateY(forward ? speed : -0.1);
  wheels.frontLeft.children[0].rotateY(forward ? speed : -0.1);
  wheels.rearRight.children[0].rotateY(forward ? speed : -0.1);
  wheels.rearLeft.children[0].rotateY(forward ? speed : -0.1);
};
