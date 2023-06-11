const navbarTopLi = document.querySelector(".navbar__top__ul li");
const navbarTopPrevious = document.querySelector(".navbar__top__i--previous");
const navbarTopNext = document.querySelector(".navbar__top__i--next");
let currentIndex = 0;
const navbar = [
  { i: "FREE DELIVERY FOR ORDERS OVER $30" },
  { i: "EXTRA 20% OFF SALE" },
];

//-----------------------------NAVBAR TOP BASLANGİC ----------------------------------------

//düzenli olarak navbarTop ta li leri ileri sarar --- BASLANGİC
setInterval(() => {
  transitionInLi();
}, 7000);
//düzenli olarak navbarTop ta li leri ileri sarar --- SON
//NavbarTop ta lileri geri sarar--- BASLANGİC
navbarTopPrevious.addEventListener("click", () => {
  navbarTopLi.classList.add("hide");
  setTimeout(() => {
    currentIndex = (currentIndex - 1 + navbar.length) % navbar.length;
    navbarTopLi.textContent = navbar[currentIndex].i;
    navbarTopLi.classList.remove("hide");
  }, 150);
});
//NavbarTop ta lileri geri sarar--- SON
//NavbarTop ta lileri ileri sarar--- BASLANGİC
navbarTopNext.addEventListener("click", () => {
  navbarTopLi.classList.add("hide");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % navbar.length;
    navbarTopLi.textContent = navbar[currentIndex].i;
    navbarTopLi.classList.remove("hide");
  }, 150);
});
//NavbarTop ta lileri ileri sarar--- SON
//NavbarTopta li leri geçişlerine efect verir -- BASLANGİC
function transitionInLi() {
  navbarTopLi.classList.add("hide");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % navbar.length;
    navbarTopLi.textContent = navbar[currentIndex].i;
    navbarTopLi.classList.remove("hide");
  }, 150);
}
//NavbarTopta li leri geçişlerine efect verir -- SON

//-----------------------------NAVBAR TOP SON ----------------------------------------

//-----------------------------NAVBAR MIDDLE BASLANGİC ----------------------------------------

const currencyP = document.querySelector(".navbar__middle__right__currency__p");
const currencies = document.getElementById("navbar__middle__right__currencies");
currencyP.addEventListener("click", () => {
  currencies.classList.toggle("dNone");
});

const navItems = ["shop", "about", "blog", "nfym"];
const navbarUlList = document.querySelectorAll(
  ".navbar__middle__left__ul ul>li"
);

navbarUlList.forEach((item, index) => {
  const middliDropdown = document.getElementById(
    `navbar__middle__dropdown--${navItems[index]}`
  );
  if (index < 3) {
    item.addEventListener("mouseenter", function () {
      const dropdownLi = middliDropdown.querySelectorAll(
        ".navbar__middle__dropdown__ul>li"
      );
      middliDropdown.classList.remove("dNone");
      dropdownLi.forEach((item, i) => {
        item.classList.add(`dNoneAnimationLiUp--${i + 1}`);
        i++;
      });
    });
    
  } else {
    item.addEventListener("mouseenter", function () {
      middliDropdown.classList.remove("dNone");
      const dropdownDiv = middliDropdown.querySelectorAll(
        ".navbar__middle__dropdown--nfym>div img"
      );
      dropdownDiv.forEach((item) => {
        item.classList.add("dNoneAnimationScale");
      });
    });
  }
  item.addEventListener("mouseleave", function () {
    middliDropdown.classList.add("dNone");
  });

  middliDropdown.addEventListener("mouseenter", function () {
    middliDropdown.classList.remove("dNone");
  });
  middliDropdown.addEventListener("mouseleave", function () {
    middliDropdown.classList.add("dNone");
  });

});

function myFunction(x) {
  x.classList.toggle("change");
}