const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", function () {
  primaryNav.classList.toggle("open");

  const menuOpen = primaryNav.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", menuOpen);
});

const albumCards = document.querySelectorAll(".album-card");

albumCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});
const carouselImages = document.querySelectorAll(".carousel-track img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentImage = 0;

function showImage(index) {
  carouselImages.forEach(function (image) {
    image.classList.remove("active");
  });

  carouselImages[index].classList.add("active");
}

if (carouselImages.length > 0) {
  showImage(currentImage);

  nextBtn.addEventListener("click", function () {
    currentImage = currentImage + 1;

    if (currentImage >= carouselImages.length) {
      currentImage = 0;
    }

    showImage(currentImage);
  });

  prevBtn.addEventListener("click", function () {
    currentImage = currentImage - 1;

    if (currentImage < 0) {
      currentImage = carouselImages.length - 1;
    }

    showImage(currentImage);
  });
}