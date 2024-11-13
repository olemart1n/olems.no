import { shootData } from "../game-global";

export const sendShootData = (conn: WebSocket) => {
  conn.send(
    JSON.stringify({
      name: "shoot_data",
      payload: shootData,
    }),
  );
};
