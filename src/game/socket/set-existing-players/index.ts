import meshFactory from "~/game/three/mesh-factory";
import { activePlayers } from "~/game/game-global";
import { scene } from "~/game/three";

export const setExistingPlayers = (players: string[]) =>
  players.forEach((username) => {
    const car = meshFactory.car();
    activePlayers.push({ car: car, username });
    scene.add(car);
  });
