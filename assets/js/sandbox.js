"use strict";

const btn = document.querySelector(".btn-click");

const clickBtn = (i) => (n) => {
    if (i > n) {
      console.log("Click - ", i--);
    } else {
      btn.removeEventListener("click", resultClick);
      btn.disabled = true;
      console.log("Click - ", i);
    }
};

const resultClick = clickBtn(6);

btn.addEventListener("click", () => resultClick(1));

