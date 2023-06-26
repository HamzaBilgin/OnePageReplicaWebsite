// window.onload = function() {
//     console.log("calişti")
//     window.scrollTo({
//       top: 0,
//       left: 0,
//     });
//   };

const introImgIndex = document.querySelector(".intro img");
const introInfoIndex = document.querySelector(".intro div");
const bottomInfoIndex = document.querySelector(".bottomIntro");
const shopyIndex = document.querySelectorAll(".shopy .shopy__body ul li");
const mainSectionFirstIndex = document.querySelector(".main--section__first img");
const mainSectionSecondIndex = document.querySelector(".main--section__second div");
const middleIntroImgIndex = document.querySelector(".middleIntro img");
const middleIntroInfoIndex = document.querySelector(".middleIntro div");
const productsIndex = document.querySelectorAll(".products .productsTwo ul li");

introImgIndex.classList.add("zoomOutFast");
introInfoIndex.classList.add("downToUpAnimationDelay");
bottomInfoIndex.classList.add("animationWhiteTowardsInside");
// zoomOutFast
// shopyIndex.forEach((item,index)=>{
//     console.log(index + item.innerHTML)
// })

window.addEventListener("scroll", () => {
  const scrollOffset = window.innerHeight + window.scrollY;
  const documentHeight = document.body.offsetHeight;
  // console.log(documentHeight - scrollOffset)
  if (documentHeight - scrollOffset <= 3450) {
    shopyIndex.forEach((item, index) => {
        item.classList.add(`downToUpAnimation--${index}`);
    });
  }
  if (documentHeight - scrollOffset <= 2400) {
    mainSectionFirstIndex.classList.add("zoomOutFast");
    mainSectionSecondIndex.classList.add("downToUpAnimationDelay");
  }
  if (documentHeight - scrollOffset <= 1750) {
    middleIntroImgIndex.classList.add("zoomOutFast");
    middleIntroInfoIndex.classList.add("downToUpAnimationDelay");
  }
  if (documentHeight - scrollOffset <= 1250) {
    productsIndex.forEach((item, index) => {
        item.classList.add(`downToUpAnimation--${index}`);
    });
  }
});
