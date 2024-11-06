import type { ActivePlayersData, CarDataProps } from "~/game/game-global";

export const setPlayerCar = (
  player: ActivePlayersData,
  payload: CarDataProps,
) => {
  // SET CAR'S POSITION AND ROTATION
  player.car.position.copy(payload.carPositionVector);
  player.car.lookAt(
    player.car.position.clone().add(payload.carDirectionVector),
  );
};
