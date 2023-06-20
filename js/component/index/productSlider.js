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
    console.log(item.textContent);
    const aa = item.textContent.toLowerCase();
    generateImg(aa)
      .then((result) => {
        console.log(result);
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
    console.log(result);
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
    console.log(product);
    const li = document.createElement("li");
    li.classList.add("products__body__list__item", "glide__slide");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("products__body__item__img");

    const statusParagraph = document.createElement("p");
    statusParagraph.textContent = status;
    imgContainer.appendChild(statusParagraph);

    const firstImage = document.createElement("img");
    firstImage.classList.add("first");
    firstImage.src = product.img.firstImage;
    firstImage.alt = "";
    imgContainer.appendChild(firstImage);

    const secondImage = document.createElement("img");
    secondImage.classList.add("second");
    secondImage.src = product.img.secondImage;
    secondImage.alt = "";
    imgContainer.appendChild(secondImage);

    li.appendChild(imgContainer);

    const infoContainer = document.createElement('div');
infoContainer.classList.add('products__body__item__info');

const productNameParagraph = document.createElement('p');
productNameParagraph.textContent = product.name;
infoContainer.appendChild(productNameParagraph);

const priceContainer = document.createElement('div');

const newPriceParagraph = document.createElement('p');
newPriceParagraph.classList.add('newPrice');
newPriceParagraph.textContent = '$' + product.price.newPrice;
priceContainer.appendChild(newPriceParagraph);

const oldPriceParagraph = document.createElement('p');
oldPriceParagraph.classList.add('oldPrice');
oldPriceParagraph.textContent = oldPrice;
priceContainer.appendChild(oldPriceParagraph);

infoContainer.appendChild(priceContainer);

li.appendChild(infoContainer);
    productsHtml.appendChild(li);
    console.log(li);
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
