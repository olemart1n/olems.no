import { mesh } from "../../three";
import { globalVar } from "../../global-var";
// NOT ALL globalVar.carData VARIABLES ARE NOT SET IN THIS SPESIFIC FUNCTION

export const sendCarData = () => {
  mesh.car.getWorldPosition(globalVar.carData.carPositionVector);
  mesh.car.getWorldDirection(globalVar.carData.carDirectionVector);
  mesh.gunAxle.getWorldDirection(globalVar.carData.gunAxleWorldDirectionVector);
  globalVar.carData.gunAxleRotationQuaternion = mesh.gunAxle.quaternion;
  globalVar.carData.wheelsPos.frontLeft = mesh.wheels.frontLeft.position;
  globalVar.carData.wheelsPos.frontRight = mesh.wheels.frontRight.position;
  globalVar.carData.wheelsPos.rearLeft = mesh.wheels.rearLeft.position;
  globalVar.carData.wheelsPos.rearRight = mesh.wheels.rearRight.position;

  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "car_data",
      payload: globalVar.carData,
    }),
  );
};
