import * as THREE from "three";
import { firedBullets, type FiredBulletsData } from "~/game/game-global";
import { scene } from "~/game/three";

export const explode = (data: FiredBulletsData) => {
  data.bullet.geometry = new THREE.SphereGeometry(1, 32, 32);
  // Scale up the bullet to create an explosion effect
  let startOpacitity = (data.bullet.material as THREE.MeshStandardMaterial)
    .opacity;
  const startSize = data.bullet.scale.x;
  const endSize = startSize * 4;
  const duration = 50; // duration of the explosion effect in milliseconds
  const interval = 5; // interval between scale updates in milliseconds
  const scaleStep = startSize / (duration / interval);
  let currentSize = startSize;

  const explosionInterval = setInterval(() => {
    startOpacitity -= 1;
    currentSize += scaleStep;
    data.bullet.scale.set(currentSize, currentSize, currentSize);
    (data.bullet.material as THREE.MeshStandardMaterial).opacity =
      startOpacitity;
    if (currentSize >= endSize) {
      console.log("interval ended");

      firedBullets.splice(firedBullets.indexOf(data), 1);
      scene.remove(data.bullet);
      clearInterval(explosionInterval);
    }
  }, interval);
};
