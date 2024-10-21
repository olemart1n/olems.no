import type { Signal } from "@builder.io/qwik";
import { cameraData } from "../state";
export const addMousemoveEvent = (mainEl: Signal<HTMLElement | undefined>) => {
    mainEl.value!.onmousemove = (e) => {
        // Map mouse movement to theta (horizontal) and phi (vertical) angles
        cameraData.theta -= e.movementX * 0.002;  // Adjust sensitivity as needed
        cameraData.phi -= e.movementY * 0.002;
    
        // Clamp phi to prevent the camera from flipping upside down
        cameraData.phi = Math.max(0.1, Math.min(Math.PI - 0.1, cameraData.phi));
    }
}