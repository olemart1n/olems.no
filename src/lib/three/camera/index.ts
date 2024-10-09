import * as THREE from "three";
import type { Signal } from "@builder.io/qwik";

export const camera = (mainEl: Signal<HTMLElement | undefined>) => {
    const camera = new THREE.PerspectiveCamera(
        75, 
        mainEl.value!.clientWidth /
        mainEl.value!.clientHeight,
        .1,
        250)
        
    
    return camera
}