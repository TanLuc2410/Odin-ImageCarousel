import "./style.css";

const imageCarousel = () => {
  const images = document.querySelectorAll("[data-image]");
  const imgArray = [...images];
  console.log(imgArray);
  const imgContainer = document.querySelector(".slides");
  const forwardBtn = document.querySelector(".forwardBtn");
  const backBtn = document.querySelector(".backBtn");

  const dotContainer = document.querySelector(".dots");

  let currentSlide = 0;
  const LAST_IMAGE = imgArray.length - 1;
  const FIRST_IMAGE = 0;

  const nextSlide = () => {
    if (currentSlide < LAST_IMAGE) currentSlide += 1;
    ////// CAN ADD AN IF STATEMENT HERE IF I WANT TO INTERVAL LOOP AGAIN AFTER REACHING THE LAST IMAGE
    for (let i = 0; i < imgArray.length; i++) {
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
  dotContainer.addEventListener("click", (e) => {
    const previousActiveDot = document.querySelector(".active");
    if (previousActiveDot) previousActiveDot.classList.remove("active");
    e.target.classList.toggle("active");
    imgContainer.style.transform = `translateX(-${Number(e.target.dataset.dot) * 86}%)`;
    currentSlide = Number(e.target.dataset.dot);
  });
  setInterval(nextSlide, 5000);
};

imageCarousel();
