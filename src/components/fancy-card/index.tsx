import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import styles from "./style.css?raw";
export const FancyCard = component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="fancy-glow">
      <Slot></Slot>
    </div>
  );
});
