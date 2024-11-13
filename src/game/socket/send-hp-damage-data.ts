import { hpDamageData } from "../game-global";
export const sendHpDamageData = (conn: WebSocket) => {
  conn.send(
    JSON.stringify({
      name: "hp_damage_data",
      payload: hpDamageData,
    }),
  );
};
