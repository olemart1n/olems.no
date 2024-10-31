import * as THREE from "three";

export const wheels = () => {
  const capMaterial = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
  });
  
  const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 32);
  
  const frontLeft = new THREE.Mesh(wheelGeometry,capMaterial);
  
  // STRIPES
  const skinMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
  const skinGeometry = new THREE.CylinderGeometry(0.32, 0.32, 0.19, 6);
  const skin = new THREE.Mesh(skinGeometry, skinMaterial)
  frontLeft.add(skin)
  
  const frontRight = frontLeft.clone();
  const rearLeft = frontLeft.clone();
  const rearRight = frontLeft.clone();

  frontLeft.position.set(-1.4, -.1, -1.8);
  frontRight.position.set(1.4, -.1, -1.8);
  rearLeft.position.set(-1.4, -.1, 1.8);
  rearRight.position.set(1.4, -.1, 1.8);
  

  
  for (const property in wheels) {
    // @ts-ignore
    wheels[property].rotation.z = Math.PI / 2;
  }
  return  {
    frontLeft,
    frontRight,
    rearLeft,
    rearRight,
  };  
}