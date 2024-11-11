import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export interface GameContextStore {
  connectedPlayersLength: number;
  username: Signal<string>;
  isError: boolean;
  errorMessage: string;
  isNotification: Signal<boolean>;
  notificationMesssage: string;
  isMenu: Signal<boolean>;
  isConnectedToSocket: boolean;
  mainEl: Signal<HTMLElement | undefined>;
  hpPercent: number;
}

const gameContext = createContextId<GameContextStore>("gameContext");

export default gameContext;
