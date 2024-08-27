import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./styles.css?inline";
export const HandlelistaLink = component$(() => {
  useStylesScoped$(styles);
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <div class="mx-auto">
      <div class="iphone">
        <p class="clock">${formattedTime}</p>
        <div data-lucide="Signal" class="signal">
          <div class="col col_1"></div>
          <div class="col col_2"></div>
          <div class="col col_3"></div>
          <div class="col col_4"></div>
        </div>
        <img
          class="handlelista-screenshot"
          src="/handlelista.png"
          height={100}
          width={100}
        />
        <div class="safari_bottom">
          <div class="safari_url_input">
            <p>handlelista.no</p>
          </div>
          <div class="safari_options">
            <div class="option">
              <div class="arrow_left"></div>
            </div>
            <div class="option">
              <div class="arrow_right"></div>
            </div>
            <div class="option">
              <div class="share_button"></div>
            </div>
            <div class="option">
              <div class="book">
                <div class="book_page1"></div>
                <div class="book_page2"></div>
              </div>
            </div>
            <div class="option">
              <div class="tabs">
                <div class="tab tab1"></div>
                <div class="tab tab2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
