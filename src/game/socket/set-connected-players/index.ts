import meshFactory from "~/game/three/mesh-factory";
import { activePlayers, type Player, carData } from "~/game/game-global";
import { scene } from "~/game/three";

export const setConnectedPlayers = (players: Player[]) => {
  players.forEach((player) => {
    if (player.id === carData.id) return;
    const car = meshFactory.car();
    activePlayers.push({
      car: car,
      username: player.username,
      hp: 100,
      id: player.id,
    });
    scene.add(car);
  });
};
