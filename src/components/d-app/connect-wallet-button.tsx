import {
  component$,
  useOn,
  $,
  type Signal,
  useOnDocument,
} from "@builder.io/qwik";
import { walletClient } from "~/d-app";
import { getBalance } from "~/d-app/get-balance";

type ConnectWalletButtonProps = {
  isConnected: Signal<boolean>;
  address: Signal<string>;
  accountBalance: Signal<bigint>;
};
export const ConnectWalletButton = component$<ConnectWalletButtonProps>(
  ({ isConnected, address, accountBalance }) => {
    const connectWallet = $(async () => {
      const w = walletClient();
      await w.requestAddresses();
      const accaddr = await w.getAddresses();
      address.value = accaddr[0];
      const balance = await getBalance(accaddr[0]);
      accountBalance.value = balance;
      isConnected.value = true;
    });

    useOn(
      "click",
      $(async () => {
        if (isConnected.value) return;
        connectWallet();
      }),
    );

    useOnDocument(
      "DOMContentLoaded",
      $(async () => {
        if (!window.ethereum) return;
        const w = walletClient();

        // await w.requestAddresses();
        const addresses = await w.getAddresses();

        if (addresses.length > 0) {
          address.value = addresses[0];
          const balance = await getBalance(addresses[0]);
          accountBalance.value = balance;
          console.log("balance", balance);
          isConnected.value = true;
        } else {
          console.log("Wallet is not connected");
        }
      }),
    );

    return (
      <button class="mx-auto w-fit rounded bg-yellow-300 p-3">
        {isConnected.value ? "Connected" : "Connect Wallet"}
      </button>
    );
  },
);
