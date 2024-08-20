import { component$ } from "@builder.io/qwik";
import { LineOne } from "./line-one";
import { LineTwo } from "./line-two";
export const Header = component$(() => {
  return (
    <header>
      <LineOne />
      <LineTwo />
    </header>
  );
});
