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
    const arrow = toggle.querySelector("img");
    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  });
});
