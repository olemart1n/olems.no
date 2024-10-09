import * as THREE from "three"
import { $, type Signal } from "@builder.io/qwik"

export const renderer = (mainEl: Signal<HTMLElement | undefined>) => {
    const renderer = new THREE.WebGLRenderer()
    // const renderer = new THREE.WebGLRenderer({alpha: true})
    renderer.setSize(mainEl.value!.clientWidth, mainEl.value!.clientHeight)
    
    return renderer
} 