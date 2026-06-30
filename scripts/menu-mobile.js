const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuClose = document.getElementById("mobile-menu-close");

const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-menu-overlay");

const mobileDepartments = document.getElementById("mobile-departments");
const mobileCategories = document.getElementById("mobile-categories");

const openAllCategories = document.getElementById("open-all-categories");

const backToMain = document.getElementById("back-to-main");
const backToDepartments = document.getElementById("back-to-departments");

const departmentItems = document.querySelectorAll(".department-item");


// ABRIR MENU
mobileMenuButton.addEventListener("click", () => {
  mobileOverlay.classList.remove("hidden");

  mobileMenu.classList.remove("-translate-x-full");
});


// FECHAR MENU
function closeMobileMenu() {
  mobileMenu.classList.add("-translate-x-full");

  setTimeout(() => {
    mobileOverlay.classList.add("hidden");
  }, 300);

  // reseta navegação interna
  mobileDepartments.classList.add("translate-x-full");
  mobileCategories.classList.add("translate-x-full");
}

mobileMenuClose.addEventListener("click", closeMobileMenu);

mobileOverlay.addEventListener("click", closeMobileMenu);


// ABRIR DEPARTAMENTOS
openAllCategories.addEventListener("click", () => {
  mobileDepartments.classList.remove("translate-x-full");
});


// VOLTAR PARA MENU PRINCIPAL
backToMain.addEventListener("click", () => {
  mobileDepartments.classList.add("translate-x-full");
});


// ABRIR CATEGORIAS
departmentItems.forEach((department) => {
  department.addEventListener("click", () => {
    mobileCategories.classList.remove("translate-x-full");
  });
});


// VOLTAR PARA DEPARTAMENTOS
backToDepartments.addEventListener("click", () => {
  mobileCategories.classList.add("translate-x-full");
});