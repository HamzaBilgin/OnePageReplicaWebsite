// window.addEventListener('scroll', () => {
//     if (
//       window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
//       isDownloaded
//     ) {
//       getImages();
//     }
//   });

const bottomInfo = document.querySelector(".bottomIntro");
const bottomInfoImg = document.querySelector(".bottomIntro img");
window.addEventListener("scroll", () => {
    let control2 =
  (window.innerHeight + window.scrollY)>= (document.body.offsetHeight - 500)
    ? true
    : false;
  if (control2) {
     bottomInfo.classList.remove("animationWhiteTowardsInside");
     bottomInfo.classList.add("animationWhiteTowardsOutside");
     bottomInfoImg.classList.add("zoomInAnimationSlowly")
  }
  else{
    bottomInfo.classList.add("animationWhiteTowardsInside");
    bottomInfo.classList.remove("animationWhiteTowardsOutside");
    bottomInfoImg.classList.remove("zoomInAnimationSlowly")
  }
});
