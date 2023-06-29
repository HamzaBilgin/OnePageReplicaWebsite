const feedBackComments = [
  {
    name: "EVA ROBIN",
    comment: "In love with this brand - I would give them 6 stars if I could!",
  },
  {
    name: "ELENA CLARKE",
    comment:
      "Some of the best slow fashion pieces on the market! I can't wait to further build up my collection of their timeless classics ",
  },
  {
    name: "MARIA SMITH",
    comment:
      "This is slowly becoming my new favourite brand. Everything about Influence is incredible - from their statement pieces, to their stance on sustainability; I can't show my support here enough!",
  },
];

const feedBackComment = document.querySelector(".feedBackComment__body");
const feedBackButtons = document.querySelectorAll(
  ".feedBackComment__arrow__button"
);

let feedBackCurrentIndex = 0;

feedBackButtons.forEach((button, index) => {
  if (index === 0) {
    button.addEventListener("click", function () {
      const feedBackCommentP = document.querySelectorAll(
        ".feedBackComment__body p"
      );
      feedBackCommentP.forEach((p, i) => {
        p.classList.remove(`raiseToTop--${i + 1}`);
        p.classList.add(`downToBottom--${i + 1}`);
      });
      feedBackCurrentIndex =
        (feedBackCurrentIndex - 1 + feedBackComments.length) %
        feedBackComments.length;
        setTimeout(() => {
          feedBackCommentGenerateTemplate(feedBackComments[feedBackCurrentIndex]);
          const feedBackCommentPNew = document.querySelectorAll(
            ".feedBackComment__body p"
          );
          feedBackCommentPNew.forEach((p, i) => {
            p.classList.add(`raiseToTop--${i + 1}`);
          });
        }, 450);  
    });
  } else {
    button.addEventListener("click", function () {
      const feedBackCommentP = document.querySelectorAll(
        ".feedBackComment__body p"
      );
      feedBackCommentP.forEach((p, i) => {
        p.classList.remove(`raiseToTop--${i + 1}`);
        p.classList.add(`downToBottom--${i + 1}`);
      });
      feedBackCurrentIndex =
        (feedBackCurrentIndex + 1 + feedBackComments.length) %
        feedBackComments.length;
      setTimeout(() => {
        feedBackCommentGenerateTemplate(feedBackComments[feedBackCurrentIndex]);
        const feedBackCommentPNew = document.querySelectorAll(
          ".feedBackComment__body p"
        );
        feedBackCommentPNew.forEach((p, i) => {
          p.classList.add(`raiseToTop--${i + 1}`);
        });
      }, 450);      
    });
  }
});

// setInterval(() => {
//   feedBackCurrentIndex = (feedBackCurrentIndex + 1) % feedBackComments.length;
//   console.log(feedBackCurrentIndex)
//   feedBackCommentGenerateTemplate(feedBackComments[feedBackCurrentIndex]);
// }, 5000);

function feedBackCommentGenerateTemplate(veri) {
  feedBackComment.innerHTML = "";
  var pElement = document.createElement("p");
  var iElements = [];
  for (var i = 0; i < 5; i++) {
    var starElement = document.createElement("i");
    starElement.className = "fa-solid fa-star";
    iElements.push(starElement);
  }
  var veriComment = `${veri.comment}`;
  var veriName = `${veri.name}`;
  for (var i = 0; i < iElements.length; i++) {
    pElement.appendChild(iElements[i]);
  }
  var commentElement = document.createElement("p");
  commentElement.innerHTML = veriComment;
  var nameElement = document.createElement("p");
  nameElement.innerHTML = veriName;
  feedBackComment.appendChild(pElement);
  feedBackComment.appendChild(commentElement);
  feedBackComment.appendChild(nameElement);
}

feedBackButtons.forEach((button, index) => {
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
