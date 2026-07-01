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

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.footer-toggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const arrow = toggle.querySelector('img');
      const isOpen = !content.classList.contains('hidden');

      toggles.forEach((otherToggle) => {
        const otherContent = otherToggle.nextElementSibling;
        const otherArrow = otherToggle.querySelector('img');

        otherContent.classList.add('hidden');
        otherContent.classList.remove('flex');
        otherToggle.classList.remove('active');
        otherArrow.classList.remove('rotate-180');
      });

      if (!isOpen) {
        content.classList.remove('hidden');
        content.classList.add('flex');
        toggle.classList.add('active');
        arrow.classList.add('rotate-180');
      }
    });
  });
});