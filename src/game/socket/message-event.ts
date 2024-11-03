import meshFactory from "../three/mesh-factory";
import { scene } from "../three";
import { activePlayers } from "../game-global";
import type { GameContextStore } from "../game-context";
export const messageEvent = (e: MessageEvent, game: GameContextStore) => {
  const data = JSON.parse(e.data);

  if (data.name === "carData") {
    const player = activePlayers.find(
      (player) => player.username === data.payload.username,
    );
    player?.car.position.copy(data.payload.carPositionVector);
    player?.car.lookAt(
      player.car.position.clone().add(data.payload.carDirectionVector),
    );
    player!.car.children[3].position.setY = data.payload.wheelsY.frontLeft;
    console.log(player!.car.children[3].position.y);
    // player!.car.children[4].position.setY = data.payload.wheelsY.frontRight;
    // player!.car.children[5].position.setY = data.payload.wheelsY.rearLeft;
    // player!.car.children[6].position.setY = data.payload.wheelsY.rearRight;

    // const gunAxle = player?.car.getObjectByName("gun-axle")
    // gunAxle!.lookAt(gunAxle!.position.clone().add(data.payload))

    // gunAxle?.setRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(
    //     new THREE.Vector3(0, 0, -1),
    //     data.payload.gunAxleDirectionVector
    // ));
    // gunAxle!.lookAt(lookAtPoint!);
    // player?.car.children[1].setRotationFromQuaternion(data.payload.pole1Quaternion)
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
