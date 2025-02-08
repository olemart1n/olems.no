import { $, component$, type Signal } from "@builder.io/qwik";
import { withdraw } from "~/d-app/withdraw";
import { formatEther } from "viem";
export interface WithdrawSectionProps {
  balance: Signal<bigint>;
  accountAddr: `0x${string}`;
}

export const WithdrawSection = component$<WithdrawSectionProps>(
  ({ balance, accountAddr }) => {
    const formattedBalance = formatEther(balance.value);
    const handleWithdraw = $(async () => {
      const isWithdrawn = await withdraw(accountAddr);
      if (isWithdrawn) {
        console.log("Withdrawn successfully");
        balance.value = 0n;
      }
    });
    return (
      <>
        <div class="mx-auto w-fit text-2xl">
          Balance: {formattedBalance} ETH
        </div>
        <button onClick$={handleWithdraw} class="rounded bg-blue-400 p-3">
          Withdraw
        </button>
      </>
    );
  },
);
