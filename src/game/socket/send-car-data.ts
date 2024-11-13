import { mesh } from "../three";
import { carData } from "../game-global";

// NOT ALL carData VARIABLES ARE NOT SET IN THIS SPESIFIC FUNCTION

export const sendCarData = (conn: WebSocket) => {
  mesh.car.getWorldPosition(carData.carPositionVector);
  mesh.car.getWorldDirection(carData.carDirectionVector);
  mesh.gunAxle.getWorldDirection(carData.gunAxleWorldDirectionVector);
  carData.gunAxleRotationQuaternion = mesh.gunAxle.quaternion;
  carData.wheelsPos.frontLeft = mesh.wheels.frontLeft.position;
  carData.wheelsPos.frontRight = mesh.wheels.frontRight.position;
  carData.wheelsPos.rearLeft = mesh.wheels.rearLeft.position;
  carData.wheelsPos.rearRight = mesh.wheels.rearRight.position;

  conn.send(
    JSON.stringify({
      name: "car_data",
      payload: carData,
    }),
  );
};
