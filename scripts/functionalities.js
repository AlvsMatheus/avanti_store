//Nav Logic

let lastScroll = 0;
const searchBar = document.getElementById("searchBar");
const scrollThreshold = 10; 

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (Math.abs(currentScroll - lastScroll) < scrollThreshold) return;

  if (window.innerWidth < 1024) {
    if (currentScroll > lastScroll) {
      searchBar.classList.add("hide-search");
    } else {
      searchBar.classList.remove("hide-search");
    }
  }

  if (currentScroll <= 10) {
    searchBar.classList.remove("hide-search");
  }

  lastScroll = currentScroll;
});

//Swiper logic

const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Swiper products logic

const carousel = document.getElementById("productsCarousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: 800,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -800,
    behavior: "smooth",
  });
});

//Swiper products logic two

const carousel2 = document.getElementById("productsCarousel2");
const nextBtn2 = document.getElementById("nextBtn2");
const prevBtn2 = document.getElementById("prevBtn2");

nextBtn2.addEventListener("click", () => {
  carousel2.scrollBy({
    left: 800,
    behavior: "smooth",
  });
});

prevBtn2.addEventListener("click", () => {
  carousel2.scrollBy({
    left: -800,
    behavior: "smooth",
  });
});


//Accordion logic
const toggles = document.querySelectorAll(".footer-toggle");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle("hidden");
  });
});