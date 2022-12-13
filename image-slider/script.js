"use strict";
const btnPrev = document.querySelector(".btn--left");
const btnNext = document.querySelector(".btn--right");
const arraySlide = document.querySelectorAll(".slide");

// Convert HTML syntax to an array
const arraySlider = Array.from(arraySlide);

// Define a variable for the current slide
let currentSlide = 0;

// Define a variable for the maximum possible number of slides
const maximumSlide = arraySlider.length;

// Position each image next to the other
function moveSlide(slides) {
  arraySlider.forEach(function (slide, i) {
    slide.style.transform = `translateX(${100 * (i - slides)}%)`;
  });
}
moveSlide(0);

// Move to the next or previous images
function nextImageSlide() {
  if (currentSlide === maximumSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  moveSlide(currentSlide);
}

function prevImageSlide() {
  if (currentSlide === 0) {
    currentSlide = maximumSlide - 1;
  } else {
    currentSlide--;
  }
  moveSlide(currentSlide);
}

// Implementing the event listeners
btnNext.addEventListener("click", nextImageSlide);
btnPrev.addEventListener("click", prevImageSlide);
