const circles = document.querySelectorAll(
  ".main--section__first .main--section__circle"
);
const mainClose  = document.querySelectorAll(".main--section__third>div:nth-child(2) p")
const firstDiv = document.querySelector(".main--section__first");
const secondDiv = document.querySelector(".main--section__second");
const thirdDiv = document.querySelector(".main--section__third--one");
const fourthDiv = document.querySelector(".main--section__third--two");

window.addEventListener('resize', function() {
  if (window.innerWidth > 1000) {
    firstDiv.classList.remove("dNone");
  } else {
    if(secondDiv.classList.contains("dNone")){
      firstDiv.classList.add("dNone");
    }
  }
});
let count = false;
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
      
      firstDiv.classList.add("dNone");
    } 
    if (index == 0) {
        count = count === false ? true : false;
       
      secondDiv.classList.add("dNone");
      thirdDiv.classList.remove("dNone");
      fourthDiv.classList.add("dNone");
    

    }
    else{
      secondDiv.classList.add("dNone");
      fourthDiv.classList.remove("dNone");
      thirdDiv.classList.add("dNone");
    }
  });
});

mainClose.forEach((close,index) =>{
  close.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
      
      firstDiv.classList.remove("dNone");
    }
    if (index == 0) {
      secondDiv.classList.remove("dNone");
        thirdDiv.classList.add("dNone");
        fourthDiv.classList.add("dNone");
    }
    else{
      secondDiv.classList.remove("dNone");
        thirdDiv.classList.add("dNone");
        fourthDiv.classList.add("dNone");
    }
  })
 
})
