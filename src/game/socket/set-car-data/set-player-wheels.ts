import type { ActivePlayersData, CarDataProps } from "~/game/game-global";

export const setPlayerWheels = (
  player: ActivePlayersData,
  payload: CarDataProps,
) => {
  player!.car.children[0].position.y = payload.wheelsPos.frontLeft.y;
  player!.car.children[1].position.y = payload.wheelsPos.frontRight.y;
  player!.car.children[2].position.y = payload.wheelsPos.rearLeft.y;
  player!.car.children[3].position.y = payload.wheelsPos.rearRight.y;
};
