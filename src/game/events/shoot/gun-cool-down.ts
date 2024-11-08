import { mesh } from "~/game/three";
import { gunState } from "~/game/game-global";
export const gunCoolDown = () => {
  const gun = mesh.gun;
  const gunAxle = mesh.gunAxle;
  const startZ = gun.position.z;
  gunAxle.material.color.set(0xff0000);
  gun.position.z = gun.position.z - 0.05;
  const returnPoint = gun.position.z - 0.7;
  let isReturningToStartZ = false;
  gunState.isCooling = true;
  setTimeout(() => {
    gunAxle.material.color.set(0x9ff275);
    gunState.isCooling = false;
  }, 1500);

  const gunInterval = setInterval(() => {
    if (gun.position.z >= returnPoint && !isReturningToStartZ) {
      gun.position.z -= 0.1;
      if (gun.position.z <= returnPoint) {
        isReturningToStartZ = true;
      }
    } else {
      gun.position.z += 0.01;
    }

    if (gun.position.z >= startZ) {
      gun.position.z = startZ;
      clearInterval(gunInterval);
    }
  }, 15);
};
