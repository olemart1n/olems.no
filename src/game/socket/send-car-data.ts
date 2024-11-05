import { mesh } from "../three";
import { carData } from "../game-global";

// NOT ALL carData VARIABLES ARE NOT SET IN THIS SPESIFIC FUNCTION

export const sendCarData = (conn: WebSocket) => {
  mesh.car.getWorldPosition(carData.carPositionVector);
  mesh.car.getWorldDirection(carData.carDirectionVector);
  mesh.gunAxle.getWorldDirection(carData.gunAxleWorldDirectionVector);
  carData.gunAxleRotationQuaternion = mesh.gunAxle.quaternion;
  carData.wheelsY.frontLeft = mesh.wheels.frontLeft.position.y;
  carData.wheelsY.frontRight = mesh.wheels.frontRight.position.y;
  carData.wheelsY.rearLeft = mesh.wheels.rearLeft.position.y;
  carData.wheelsY.rearRight = mesh.wheels.rearRight.position.y;

  conn.send(
    JSON.stringify({
      name: "carData",
      payload: carData,
    }),
  );
};
