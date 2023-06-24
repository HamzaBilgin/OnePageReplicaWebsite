/* Header kısmındakilerin css durumlarını düzenler start*/
const productsHeaderLi = document.querySelectorAll(".products__header>ul li");
productsHeaderLi.forEach((item, i) => {
  item.addEventListener("click", () => {
    productsHeaderLi.forEach((item) => {
      item.classList.remove("underliAnimation");
      item.classList.remove("opacityToOneHover");
    });

    item.classList.toggle("underliAnimation");
    productsHeaderLi.forEach((item2) => {
      if (item2 !== item) {
        item2.classList.toggle("opacityToOneHover");
      }
    });
  });
});
/* Header kısmındakilerin css durumlarını düzenler end*/
/* Okların sola ve sağa animasyonlu geçişisni sağlar start */
const buttons = document.querySelectorAll(".product__slider__button");
buttons.forEach((button) => {
  const bb = button.querySelector("button");
  if (button.classList.contains("product__slider__button--previous")) {
    button.addEventListener("mouseenter", function () {
      bb.classList.toggle("moveLeft");
    });
    bb.addEventListener("mouseleave", function () {
      bb.classList.toggle("moveLeft");
    });
  } else {
    button.addEventListener("mouseenter", function () {
      bb.classList.toggle("moveRight");
    });
    bb.addEventListener("mouseleave", function () {
      bb.classList.toggle("moveRight");
    });
  }
});
/* Okların sola ve sağa animasyonlu geçişisni sağlar end */
/* ProductSlider html dolumu start */
productsHeaderLi.forEach((item, i) => {
  item.addEventListener("click", () => {
    const aa = item.textContent.toLowerCase();
    
    generateImg(aa)
      .then((result) => {
        generateTemplateProducts(result);
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

/* json dosyasından verileri çeker start */
const generateImg = async (search) => {
  let jsonObject = `js/json/${search}Products.json`;
  try {
    const response = await fetch(jsonObject);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch images.");
  }
};
/* json dosyasından verileri çeker end */
/* Gelen veriler ile generateTemplateProducts(result) çağırarak html düzenler start*/
generateImg("dresses")
  .then((result) => {

    generateTemplateProducts(result);
  })
  .catch((error) => {
    console.error(error);
  });
/* Gelen veriler ile generateTemplateProducts(result) çağırarak slider düzenler end*/
/* slider düzenleme fonksiyonu start*/
function generateTemplateProducts(result) {
  let productsHtml = document.querySelector(
    ".products__body .products__body__list"
  );

  productsHtml.innerHTML = "";
  result.forEach((product) => {
    const oldPrice =
      product.price.oldPrice !== undefined ? "$" + product.price.oldPrice : "";
    const status = product.status !== undefined ? product.status : "";
    const html = `<li class="products__body__list__item glide__slide">
    <div class="products__body__item__img">
      <p>${status}</p>
      <img class="first" src="${product.img.firstImage}" alt="">
      <img class="second" src="${product.img.secondImage}" alt="">
  
    </div>
    <div class="products__body__item__info">
      <p>${product.name}</p>
      <div>
        <p class="newPrice">$${product.price.newPrice}</p>
        <p class="oldPrice">${oldPrice}</p>
      </div>            
    </div>
  </li>  `;
  productsHtml.innerHTML += html;
  });
  const statusP = document.querySelectorAll(".products__body__item__img > p");
  statusP.forEach((item) => {
    switch (item.textContent) {
      case "SALE":
        item.classList.add("blackBackground");
        item.classList.add("whiteColor");
        break;
      case "SOLD OUT":
        item.classList.add("greyBackground");
    }
    // if(item.textContent == "SALE"){
    //   item.classList.add("blackBackground")
    //   item.classList.add("whiteColor")
    // }
    // else if(item.textContent == "SOLD OUT"){
    //   item.classList.add("greyBackground")
    // }
  });
}
/* slider düzenleme fonksiyonu end*/
/* ProductSlider html dolumu end */
