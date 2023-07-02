const mainSectionBottomButtons = document.querySelectorAll(
  ".mainSectionBottomSlider__button"
);
const mainSectionBottomUl = document.querySelector(
  ".mainSectionBottomSlider__body__list ul"
);
const mainSectionBottomList = document.querySelectorAll(
  ".mainSectionBottomSlider__body__list ul li"
);
let mainSectionBottomCurrentIndex = 0;


const slideBar = document.querySelector(".mainSectionBottomSlider__slideBar");
// slideBar.style.width = "25%";

mainSectionBottomButtons.forEach((button, index) => {
  const bb = button.querySelector("button");
  if (index === 0) {
    button.addEventListener("click", function () {
      slideBar.style.width = "25%";
    });
   
  } else {
    button.addEventListener("click", function () {
      slideBar.style.width = "25%";
    });
   
  }
});

// feedBackCurrentIndex =
//         (feedBackCurrentIndex - 1 + feedBackComments.length) %
//         feedBackComments.length;









mainSectionBottomButtons.forEach((button, index) => {
  const bb = button.querySelector("button");
  if (index === 0) {
    button.addEventListener("mouseenter", function () {
      bb.classList.toggle("moveLeft");
    });
    button.addEventListener("mouseleave", function () {
      bb.classList.toggle("moveLeft");
    });
  } else {
    button.addEventListener("mouseenter", function () {
      bb.classList.toggle("moveRight");
    });
    button.addEventListener("mouseleave", function () {
      bb.classList.toggle("moveRight");
    });
  }
});
