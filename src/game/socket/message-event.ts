import meshFactory from "../three/mesh-factory";
import { scene } from "../three";
import { activePlayers } from "../game-global";
import * as THREE from "three";
import type { GameContextStore } from "../game-context";
import { type CarDataProps, upVector } from "../game-global";
export const messageEvent = (e: MessageEvent, game: GameContextStore) => {
  const data = JSON.parse(e.data);
  const payload: CarDataProps = data.payload;
  if (data.name === "carData") {
    const player = activePlayers.find(
      (player) => player.username === data.payload.username,
    );
    // SET CAR'S POSITION AND ROTATION
    player?.car.position.copy(data.payload.carPositionVector);
    player?.car.lookAt(
      player.car.position.clone().add(data.payload.carDirectionVector),
    );
    // WHEELS
    player!.car.children[0].position.y = payload.wheelsY.frontLeft;
    player!.car.children[1].position.y = payload.wheelsY.frontRight;
    player!.car.children[2].position.y = payload.wheelsY.rearLeft;
    player!.car.children[3].position.y = payload.wheelsY.rearRight;

    // SET THE BODY'S ROTATION AND HEIGHT
    const body = player!.car.children[4];
    body.position.y = (payload.frontMidPoint.y + payload.rearMidPoint.y) / 2;
    const direction = new THREE.Vector3(
      payload.frontMidPoint.x - payload.rearMidPoint.x,
      payload.frontMidPoint.y - payload.rearMidPoint.y,
      payload.frontMidPoint.z - payload.rearMidPoint.z,
    ).normalize();
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      upVector,
      direction,
    );
    body.setRotationFromQuaternion(quaternion);

    // SET THE gunAxles ROTATION
    // const gunAxle = player!.car.getObjectByName("gun-axle");
    // gunAxle!.matrixAutoUpdate = true;

    // gunAxle?.setRotationFromQuaternion(
    //   new THREE.Quaternion().setFromUnitVectors(
    //     new THREE.Vector3(0, 0, -1),
    //     payload.gunAxleWorldDirectionVector,
    //   ),
    // );
  } else if (data.name === "existingPlayers") {
    console.log(data.payload);
    const existingPlayers: string[] = data.payload.players;

    existingPlayers.forEach((username) => {
      const car = meshFactory.car();
      activePlayers.push({ car: car, username });
      scene.add(car);
    });
  } else if (data.name === "newPlayer") {
    const car = meshFactory.car();
    activePlayers.push({ car: car, username: data.payload.value });
    scene.add(car);
    game.notificationMesssage = data.payload.value + " ble med";
    game.isNotification.value = true;
    //
    setTimeout(() => {
      game.isNotification.value = false;
    }, 2000);
  } else if (data.name === "leavingPlayer") {
    const index = activePlayers.findIndex(
      (player) => player.username === data.payload.value,
    );
    const player = activePlayers.find(
      (player) => player.username === data.payload.value,
    );

    player?.car && scene.remove(player.car);
    activePlayers.splice(index, 1);

    game.notificationMesssage = data.payload.value + " forlot spillet";
    game.isNotification.value = true;
    setTimeout(() => {
      game.isNotification.value = false;
    }, 2000);
  } else if (data.name === "connectedPlayersLength") {
    game.connectedPlayersLength = data.payload.value;
  }
};
