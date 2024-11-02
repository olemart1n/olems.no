import { type GameContextStore } from "../game-context";
import { addControls } from "../controls";
export const closeEvent = (e: CloseEvent, gameStore: GameContextStore) => {
  console.log(e);

  switch (e.code) {
    case 1006:
      gameStore.errorMessage = "TYPE: 'close'. -> Du ble koblet fra server";
      gameStore.isError = true;
      setTimeout(() => {
        gameStore.isError = false;
      }, 5000);
      gameStore.isConnectedToSocket = false;
      addControls(gameStore.mainEl, gameStore.isMenu);
      gameStore.mainEl.value?.requestPointerLock();
      break;

    default:
      break;
  }
};
