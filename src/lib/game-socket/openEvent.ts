import { GameContextStore } from "~/game-context";
import { sendCarData } from "./sendCarData";
import { addControls } from "../three/controls";
export const openEvent = (e: Event, gameStore: GameContextStore, conn: WebSocket) => {
    gameStore.isConnectedToSocket = true
    addControls(gameStore.mainEl, gameStore.isMenu)
    gameStore.mainEl.value?.requestPointerLock()
    
    setInterval(() => {
        sendCarData(conn, gameStore.username.value)
    }, 50)
}