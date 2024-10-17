import { carData} from "../state";
import { mesh } from "../mesh";
import { wheelRaycaster } from "./wheelRaycaster";
import { adjustBody } from "./adjustBody";
import { adjustPoles } from "./adjustPoles";
import { carRaycaster } from "./carRaycaster";
const wheels = mesh.wheels

let wheelRotation = 0;

export function moveCar() {

  // FORWARD
  if (carData.direction.forward) {
    carData.speed += carData.acceleration;
    spinWheels(carData.speed)
  }
  // REVERSE
  if (carData.direction.reverse) {
    carData.speed -= carData.acceleration;
    spinWheels(carData.speed, false)
  }
  // SPEED IS GREATER THAN MAX SPEED, SET SPEED = MAXSPEED
  if (carData.speed > carData.maxSpeed) {
    carData.speed = carData.maxSpeed;
  }
  // IF SPEED IS LESS THAN -MAXSPEED/2 (DRIVING IN REVERSE) SET SPEED TO -MAXSPEED/2
  if (carData.speed < -carData.maxSpeed / 2) {
    carData.speed = -carData.maxSpeed / 2;
  }
  // IF SPEED IS GREATER THAN 0, ADD FRICTION TO SPEED
  if (carData.speed > 0) {
    carData.speed -= carData.friction;
  }
  // IF SPEED IS LESS THAN 0, ADD FRICTION TO SPEED
  if (carData.speed < 0) {
    carData.speed += carData.friction;
  }
  // IF SPEED IS LESS THAN FRICTION, SET SPEED TO 0
  if (Math.abs(carData.speed) < carData.friction) {
    carData.speed = 0;
  }

  if (carData.speed !== 0) {
    const flip = carData.speed > 0 ? 1 : -1;
    if (carData.direction.left) {
      carData.angle += 0.03 * flip;
      mesh.car.rotateY(0.03 * flip);
    }
    if (carData.direction.right) {
      carData.angle -= 0.03 * flip;
      mesh.car.rotateY(-0.03 * flip);
    }
  }

  if (carData.direction.left && wheelRotation < 1) {
    
    wheelRotation += 0.01;
    wheels.frontLeft.rotateX(0.02);
    
    wheels.frontRight.rotateX(0.02);
  }
  if (carData.direction.right && wheelRotation > -1) {
    wheelRotation -= 0.01;
    wheels.frontLeft.rotateX(-0.02);
    wheels.frontRight.rotateX(-0.02);    
  }

  if (
    !carData.direction.right &&
    !carData.direction.left &&
    wheelRotation !== 0
  ) {
    wheels.frontLeft.rotation.set(0, 0, Math.PI / 2);
    wheels.frontRight.rotation.set(0, 0, Math.PI / 2);
    wheelRotation = 0;
  }
  
  mesh.car.position.x -= Math.sin(carData.angle) * carData.speed;
  mesh.car.position.z -= Math.cos(carData.angle) * carData.speed;

  
  adjustBody()
  wheelRaycaster(wheels.frontRight)  
  wheelRaycaster(wheels.frontLeft)
  wheelRaycaster(wheels.rearRight)
  wheelRaycaster(wheels.rearLeft)
  adjustPoles()
}


const spinWheels = (speed: number, forward: boolean = true ) => {
  wheels.frontRight.children[0].rotateY(forward ? speed : - .1)
  wheels.frontLeft.children[0].rotateY(forward ? speed : - .1)
  wheels.rearRight.children[0].rotateY(forward ? speed : - .1)
  wheels.rearLeft.children[0].rotateY(forward ? speed : - .1)
}