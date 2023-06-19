const generateImg = async (search) => {
  let jsonObject = `js/json/${search}Products.json`;
  try {
    const response = await fetch(jsonObject);
    const data = await response.json();
    // data.forEach(item =>{
    //   console.log(item)
    // })
    return data;
  } catch (error) {
    throw new Error("Failed to fetch images.");
  }
};
generateImg("tops")
  .then((result) => {
    
      generateTemplateProducts(result)
    
  })
  .catch((error) => {
    console.error(error);
  });

function generateTemplateProducts(result) {
  result.forEach(product =>{
    const oldPrice = product.price.oldPrice !== undefined ? ("$" +product.price.oldPrice):"";
    const status = product.status !== undefined ? product.status : "";
    console.log(status)
    const productsHtml = document.querySelector(
      ".products__body .products__body__list"
    );
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
  })
  
}

/* Header kısmındakilerin css durumlarını düzenler start*/
const productsHeaderLi = document.querySelectorAll(".products__header>ul li");
productsHeaderLi.forEach((item, i) => {
  item.addEventListener("click", () => {
    productsHeaderLi.forEach((item) => {
      item.classList.remove("underliAnimation");
      item.classList.remove("opacityToOneHover");
    });

    item.classList.add("underliAnimation");
    productsHeaderLi.forEach((item2) => {
      if (item2 !== item) {
        item2.classList.add("opacityToOneHover");
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
