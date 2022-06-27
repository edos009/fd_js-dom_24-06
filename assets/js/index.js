"use strict";

const imagesDB = [
  "https://i.pinimg.com/736x/d3/26/09/d326091a6585ba18839fc85d1b36152a.jpg",
  "https://wallpaper.dog/large/17194805.jpg",
  "https://img2.goodfon.ru/wallpaper/nbig/d/66/dota-dota2-dota-dota2-2-morta.jpg",
  "https://cdn.kincir.com/1/production/media/2017/november/hero-imba-707/hero-imba-dota-2-1-700x700.jpg",
  "https://www.gamersdecide.com/sites/default/files/gankers.jpg",
];

const [btnPrev, btnNext] = document.querySelectorAll(
  ".slider-container button"
);
const img = document.querySelector(".slider-container .slider img");

const slider = new Slider(imagesDB, 0);

const createSliderBtnHandler =
  (direction = "next") =>
  () => {
    slider._currentIndex = slider[direction === "next" ? "next" : "prev"]; // slider.next or slider.prev
    updateView();
  };

btnNext.addEventListener("click", createSliderBtnHandler("next"));
btnPrev.addEventListener("click", createSliderBtnHandler("prev"));

function updateView() {
  img.setAttribute("src", slider.currentSlide);
}
updateView();
