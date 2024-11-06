import { activePlayers } from "../game-global";
import type { GameContextStore } from "../game-context";
import { type CarDataProps } from "../game-global";
import {
  setPlayerCar,
  setPlayerWheels,
  setPlayerGunAxle,
  setPlayerCarBody,
} from "./set-car-data";
import { setNewPlayer } from "./set-new-player";
import { setExistingPlayers } from "./set-existing-players";
import { setLeavingPlayer } from "./set-leaving-player";

export const messageEvent = (e: MessageEvent, game: GameContextStore) => {
  const data = JSON.parse(e.data);
  const payload: CarDataProps = data.payload;

  if (data.name === "carData") {
    const player = activePlayers.find(
      (player) => player.username === data.payload.username,
    );
    setPlayerCar(player!, payload);
    setPlayerWheels(player!, payload);
    setPlayerCarBody(player!, payload);
    setPlayerGunAxle(player!, payload);
  } else if (data.name === "existingPlayers") {
    setExistingPlayers(data.payload.players);
  } else if (data.name === "newPlayer") {
    setNewPlayer(data.payload.value, game);
  } else if (data.name === "leavingPlayer") {
    setLeavingPlayer(data.payload.value, game);
  } else if (data.name === "connectedPlayersLength") {
    game.connectedPlayersLength = data.payload.value;
  }
};
