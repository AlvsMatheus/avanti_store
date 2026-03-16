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

//search logic

const input = document.getElementById("isearch");
const button = document.getElementById("searchButton");
const result = document.getElementById("searchResult");

function search() {
  const value = input.value.trim();

  if (value === "") {
    result.classList.add("hidden");
    return;
  }

  result.textContent = `Você buscou por: '${value}'`;
  result.classList.remove("hidden");
}

button.addEventListener("click", search);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    result.classList.add("hidden");
  }
});

//Accordion logic
const toggles = document.querySelectorAll(".footer-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    content.classList.toggle("hidden");
  });
});
