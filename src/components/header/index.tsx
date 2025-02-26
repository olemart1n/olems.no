import { component$ } from "@builder.io/qwik";
import { Socials } from "./socials";
export const Header = component$(() => {
    return (
        <header class="flex  border-b  p-3 text-slate-50">
            <nav class=" bg-dark flex w-1/2 justify-between ">
                <div class="relative mx-auto hidden justify-around gap-x-3 sm:flex">
                    {/* <Internal /> */}
                    <h1 class="oregano-regular block text-center text-2xl">
                        Ole Martin
                    </h1>
                </div>
            </nav>
            <nav class="ml-auto flex items-center gap-x-2">
                <Socials />
            </nav>
        </header>
    );
});
