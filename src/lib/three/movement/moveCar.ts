import type { CarData } from "../state";
import { mesh } from "../mesh";
import { carRaycaster } from "./carRaycaster";
import { wheelRaycaster } from "./wheelRaycaster";
const frontLeftWheel = mesh.wheel.frontLeft;
const frontRightWheel = mesh.wheel.frontRight;
const rearLeftWheel = mesh.wheel.rearLeft;
const rearRightWheel = mesh.wheel.rearRight;
// const rearLeftWheel = mesh.car.getObjectByName("rearLeftWheel")!;
// const rearRightWheel = mesh.car.getObjectByName("rearRightWheel")!;

let wheelRotation = 0;
export function moveCar(carData: CarData) {
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
    frontLeftWheel.rotateX(0.02);
    
    frontRightWheel.rotateX(0.02);
  }
  if (carData.direction.right && wheelRotation > -1) {
    wheelRotation -= 0.01;
    frontLeftWheel.rotateX(-0.02);
    frontRightWheel.rotateX(-0.02);    
    
  }

  if (
    !carData.direction.right &&
    !carData.direction.left &&
    wheelRotation !== 0
  ) {
    frontLeftWheel.rotation.set(0, 0, Math.PI / 2);
    frontRightWheel.rotation.set(0, 0, Math.PI / 2);
    wheelRotation = 0;
  }
  
  mesh.car.position.x -= Math.sin(carData.angle) * carData.speed;
  mesh.car.position.z -= Math.cos(carData.angle) * carData.speed;
  carRaycaster(mesh.car, mesh.landscape)
  // wheelRaycaster(frontRightWheel, mesh.landscape)  
  
  // wheelRaycaster(frontLeftWheel, mesh.landscape)
  // wheelRaycaster(rearRightWheel, mesh.landscape)
  // wheelRaycaster(rearLeftWheel, mesh.landscape)
}


const spinWheels = (speed: number, forward: boolean = true ) => {
  frontRightWheel.children[0].rotateY(forward ? speed : - .1)
  frontLeftWheel.children[0].rotateY(forward ? speed : - .1)
  rearRightWheel.children[0].rotateY(forward ? speed : - .1)
  rearLeftWheel.children[0].rotateY(forward ? speed : - .1)
}