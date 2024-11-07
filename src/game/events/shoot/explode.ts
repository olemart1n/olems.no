import * as THREE from "three";
import { firedBullets, type FiredBulletsData } from "~/game/game-global";
import { scene } from "~/game/three";

export const explode = (data: FiredBulletsData) => {
  data.bullet.geometry = new THREE.SphereGeometry(1, 32, 32);
  let startOpacitity = 1;
  const startSize = data.bullet.scale.x;
  const endSize = startSize * 5;
  const duration = 60; // duration of the explosion effect in milliseconds
  const interval = 20; // interval between scale updates in milliseconds
  const scaleStep = startSize / (duration / interval);
  let currentSize = startSize;

  const explosionInterval = setInterval(() => {
    startOpacitity -= 0.04;
    currentSize += scaleStep;
    data.bullet.scale.set(currentSize, currentSize, currentSize);
    const material = data.bullet.material as THREE.MeshStandardMaterial;
    material.opacity = startOpacitity;
    if (currentSize >= endSize) {
      firedBullets.splice(firedBullets.indexOf(data), 1);
      scene.remove(data.bullet);
      clearInterval(explosionInterval);
    }
  }, interval);
};
