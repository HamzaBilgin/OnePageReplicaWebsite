var quantityInput = document.getElementById("quantityInput");
quantityInput.value = "0";

const productlist = document.querySelectorAll(
  ".shopySection__productList ul li"
);
const selectedImage = document.getElementById("selectedImage");
productlist.forEach((product, item) => {
  product.addEventListener("click", () => {
    productlist.forEach((otherProduct) => {
      if (otherProduct !== product) {
        otherProduct.classList.remove("shopyUnderlineLi");
      }
    });

    product.classList.add("shopyUnderlineLi");
    const imgSrc = product.querySelector("img").getAttribute("src");
    selectedImage.setAttribute("src", imgSrc);
  });
});

const colorList = document.querySelectorAll(
  ".shopySection__productBody__info__color ul li"
);
colorList.forEach((color, index) => {
  color.addEventListener("click", () => {
    colorList.forEach((otherColor, index) => {
      if (otherColor !== color) {
        otherColor.classList.remove("opakBorder");
      }
      color.classList.add("opakBorder");
    });
    const selectedSize = document.querySelector(
      ".shopySection__productBody__info__size ul li.shopySectionUnderlineInsideToOutside"
    );
    if (selectedSize) {
      const colorIndex = Array.from(color.parentNode.children).indexOf(color);

      const sizeIndex = Array.from(sizeList).indexOf(selectedSize);

      const result =
        colorIndex === 0 ? sizeIndex + 1 : colorIndex + 9 + sizeIndex;
      selectedImage.setAttribute(
        "src",
        `img/index/shopySection/${result}.webp`
      );

      productlist.forEach((product, index) => {
        if (index === result - 1) {
          product.classList.add("shopyUnderlineLi");
        } else {
          product.classList.remove("shopyUnderlineLi");
        }
      });
    }
  });
});

const sizeList = document.querySelectorAll(
  ".shopySection__productBody__info__size ul li"
);
sizeList.forEach((size, item) => {
  size.addEventListener("click", () => {
    sizeList.forEach((otherSize) => {
      if (otherSize !== size) {
        otherSize.classList.remove("shopySectionUnderlineInsideToOutside");
      }
      size.classList.add("shopySectionUnderlineInsideToOutside");
    });
    const selectedColor = document.querySelector(
      ".shopySection__productBody__info__color ul li.opakBorder"
    );
    if (selectedColor) {
      const colorIndex = Array.from(colorList).indexOf(selectedColor);
      const sizeIndex = Array.from(size.parentNode.children).indexOf(size);
      const result =
        colorIndex === 0 ? sizeIndex + 1 : colorIndex + 9 + sizeIndex;
      selectedImage.setAttribute(
        "src",
        `img/index/shopySection/${result}.webp`
      );
      productlist.forEach((product, index) => {
        if (index === result - 1) {
          product.classList.add("shopyUnderlineLi");
        } else {
          product.classList.remove("shopyUnderlineLi");
        }
      });
    }
  });
});

const operationButtons = document.querySelectorAll(
  ".shopySection__productBody__info__quantity div p"
);
operationButtons.forEach((operator, index) => {
  operator.addEventListener("click", () => {
    if (index === 0) {
      if (quantityInput.value > 0) {
        quantityInput.value--;
      }
    } else {
      quantityInput.value++;
    }
  });
});
