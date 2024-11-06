import { firedBullets, bulletSpeed } from "../../game-global";

export function moveBullets() {
  firedBullets.forEach((data) => {
    if (data.hasHitted) {
      return;
    }
    data.bullet.position.add(
      data.direction.clone().multiplyScalar(bulletSpeed),
    );
  });
}
