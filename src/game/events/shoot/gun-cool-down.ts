import { mesh } from "~/game/three";
export const gunCoolDown = () => {
  const gun = mesh.gun;
  const startZ = gun.position.z;
  gun.material.color.set(0xff0000);
  gun.position.z = gun.position.z - 1;
  setTimeout(() => {
    gun.material.color.set(0xbababa);
  }, 2000);
  const gunInterval = setInterval(() => {
    gun.position.z += 0.01;
    if (gun.position.z >= startZ) {
      gun.position.z = startZ;
      clearInterval(gunInterval);
    }
  }, 15);
};
