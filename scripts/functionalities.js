//Nav Logic Image

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

  result.innerHTML = `Você buscou por: <span class="font-bold text-purple-600">'${value}'</span>`;
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
