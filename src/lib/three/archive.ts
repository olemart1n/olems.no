import type * as THREE from "three";
export function updateCarHeight(car: THREE.Mesh, landscape: THREE.Mesh) {
  const landscapeVertices = landscape.geometry.attributes.position.array;

  // Assuming the plane is centered at (0,0) and has 1000x1000 size
  const landscapeSize = 1000;
  const segments = 40; // Number of segments along one axis of the plane

  // Calculate the relative index of the car within the landscape grid
  const stepSize = landscapeSize / segments;
  const xIndex = Math.floor((car.position.x + landscapeSize / 2) / stepSize);
  const zIndex = Math.floor((car.position.y + landscapeSize / 2) / stepSize);

  // Find the index in the landscape's vertex array
  const vertexIndex = (zIndex * (segments + 1) + xIndex) * 3; // * 3 to account for x, y, z

  // Get the z-value (height) at the car's location
  const landscapeHeight = landscapeVertices[vertexIndex + 2]; // +2 to access the z-value (height)

  // Adjust the car's y-position to match the height of the landscape at that point
  car.position.y = landscapeHeight + 0.5; // Add an offset to avoid the car sinking
}
