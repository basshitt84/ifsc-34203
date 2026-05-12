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