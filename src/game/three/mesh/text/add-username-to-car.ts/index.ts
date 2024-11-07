import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { body } from "../../car";
import { fontBrighter } from "../font-loader";

export const addUsernameToCar = (username: string) => {
  const geometry = new TextGeometry(username, {
    font: fontBrighter,
    size: 2.5 / username.length,
    depth: 0.05,
    // curveSegments: 2,
  });
  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xfb3f0f,
  });
  const usernameText = new THREE.Mesh(geometry, textMaterial);
  usernameText.position.set(-0.6, -0.2, 2);
  body.add(usernameText);
};
