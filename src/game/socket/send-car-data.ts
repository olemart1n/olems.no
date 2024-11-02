import { mesh } from "../three";
import { carData } from "../game-global";

export const sendCarData = (conn: WebSocket, username: string) => {
  carData.username = username;
  mesh.car.getWorldPosition(carData.carPositionVector);
  mesh.car.getWorldDirection(carData.carDirectionVector);
  mesh.gunAxle.getWorldDirection(carData.gunAxleDirectionVector);
  conn.send(
    JSON.stringify({
      name: "carData",
      payload: carData,
    }),
  );
};
