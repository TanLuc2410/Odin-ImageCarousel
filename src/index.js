import "./style.css";

const imageCarousel = () => {
  const images = document.querySelectorAll("[data-image]");
  const imgArray = [...images];
  console.log(imgArray);
  const imgContainer = document.querySelector(".slides");
  const forwardBtn = document.querySelector(".forwardBtn");
  const backBtn = document.querySelector(".backBtn");

  let currentSlide = 0;
  const LAST_IMAGE = imgArray.length - 1;
  const FIRST_IMAGE = 0;

  const nextSlide = () => {
    if (currentSlide < LAST_IMAGE) currentSlide += 1;
    for (let i = 1; i < imgArray.length; i++) {
      if (i === currentSlide) {
        imgContainer.style.transform = `translateX(-${i * 86}%)`;
      }
    }
  };

  const previousSlide = () => {
    if (currentSlide > FIRST_IMAGE) currentSlide -= 1;
    for (let i = imgArray.length - 1; i >= 0; i--) {
      if (i === currentSlide) {
        imgContainer.style.transform = `translateX(-${i * 86}%)`;
      }
    }
  };

  forwardBtn.addEventListener("click", nextSlide);
  backBtn.addEventListener("click", previousSlide);
};

imageCarousel();
