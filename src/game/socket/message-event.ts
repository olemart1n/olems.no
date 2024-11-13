import { activePlayers } from "../game-global";
import type { GameContextStore } from "../game-context";
import {
  type CarDataProps,
  type Player,
  type ShootData,
  type HpDamageData,
  carData,
} from "../game-global";
import {
  setPlayerCar,
  setPlayerWheels,
  setPlayerGunAxle,
  setPlayerCarBody,
} from "./set-car-data";
import { setConnectedPlayers } from "./set-connected-players";
import { setHpDamageData } from "./set-hp-damage-data";
import { setNewPlayer } from "./set-new-player";
import { setLeavingPlayer } from "./set-leaving-player";
import { setShootData } from "./set-shoot-data";

export const messageEvent = (e: MessageEvent, game: GameContextStore) => {
  interface Message {
    name: string;
    payload: any;
  }
  const data: Message = JSON.parse(e.data);
  if (data.name === "id") {
    carData.id = data.payload;
  } else if (data.name === "car_data") {
    const payload: CarDataProps = data.payload;
    const player = activePlayers.find(
      (player) => player.id === data.payload.id,
    );
    setPlayerCar(player!.car, payload);
    setPlayerWheels(player!.car, payload);
    setPlayerCarBody(player!.car, payload);
    setPlayerGunAxle(player!.car, payload);
  } else if (data.name === "shoot_data") {
    const shootData: ShootData = data.payload;
    setShootData(shootData);
  } else if (data.name === "connected_players") {
    const players: Player[] = data.payload;
    setConnectedPlayers(players);
  } else if (data.name === "hp_damage_data") {
    const damageData: HpDamageData = data.payload;
    setHpDamageData(damageData, game);
  } else if (data.name === "new_player") {
    const player: Player = data.payload;
    setNewPlayer(player, game);
  } else if (data.name === "leaving_player") {
    const player: Player = data.payload;
    setLeavingPlayer(player, game);
  }
};
