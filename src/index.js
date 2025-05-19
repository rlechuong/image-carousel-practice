import "./styles.css";

let index = 0;
const carouselImages = document.querySelectorAll(".carousel-image");
const carouselDots = document.querySelectorAll(".carousel-dot");
const nextButton = document.querySelector("#next-button");
const previousButton = document.querySelector("#previous-button");

const showImage = function (indexReference) {
  carouselImages.forEach((image, imageNumber) => {
    if (imageNumber === indexReference) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });

  carouselDots.forEach((dot, imageNumber) => {
    if (imageNumber === indexReference) {
      dot.style.backgroundColor = "rgb(0,0,0)";
    } else {
      dot.style.backgroundColor = "rgb(255,255,255)";
    }
  });
};

carouselDots.forEach((dot, imageNumber) => {
    dot.addEventListener("click", () => {
        index = imageNumber;
        showImage(index);
    })
})

nextButton.addEventListener("click", () => {
  if (index === carouselImages.length - 1) {
    index = 0;
  } else {
    index += 1;
  }

  showImage(index);
});

previousButton.addEventListener("click", () => {
  if (index === 0) {
    index = carouselImages.length - 1;
  } else {
    index -= 1;
  }

  showImage(index);
});

showImage(index);
