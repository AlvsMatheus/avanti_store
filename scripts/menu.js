// mobile menu
 
import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
 
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
 
const drawerSpring = { type: "spring", stiffness: 380, damping: 38, mass: 0.9 };
const fade = { duration: 0.25, easing: "ease-out" };
const easeOutSmooth = [0.22, 1, 0.36, 1];
 
function staggerReveal(container, selector) {
  const items = container.querySelectorAll(selector);
  animate(
    items,
    { opacity: [0, 1], x: [16, 0] },
    { delay: stagger(0.035, { startDelay: 0.08 }), duration: 0.3, easing: easeOutSmooth }
  );
}
 
function openMobileMenu() {
  mobileOverlay.classList.remove("hidden");
  animate(mobileOverlay, { opacity: [0, 1] }, fade);
  animate(mobileMenu, { x: ["-101%", "0%"] }, drawerSpring);
  staggerReveal(mobileMenu, "#mobile-main-menu > *");
}
 
function closeMobileMenu() {
  animate(mobileMenu, { x: "-101%" }, drawerSpring);
 
  animate(mobileOverlay, { opacity: 0 }, fade).finished.then(() => {
    mobileOverlay.classList.add("hidden");
  });
 
  // reseta os sub-painéis (sem animação, já estarão fora de vista atrás do drawer fechado)
  mobileDepartments.style.transform = "translateX(100%)";
  mobileCategories.style.transform = "translateX(100%)";
}
 
if (mobileMenuButton) mobileMenuButton.addEventListener("click", openMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);
 
if (openAllCategories) {
  openAllCategories.addEventListener("click", () => {
    animate(mobileDepartments, { x: ["100%", "0%"] }, drawerSpring);
    staggerReveal(mobileDepartments, "#back-to-main, .department-item");
  });
}
 
if (backToMain) {
  backToMain.addEventListener("click", () => {
    animate(mobileDepartments, { x: "100%" }, drawerSpring);
  });
}
 
departmentItems.forEach((department) => {
  department.addEventListener("click", () => {
    animate(mobileCategories, { x: ["100%", "0%"] }, drawerSpring);
    staggerReveal(mobileCategories, "#back-to-departments, .px-5.py-4.font-semibold, a");
  });
});
 
if (backToDepartments) {
  backToDepartments.addEventListener("click", () => {
    animate(mobileCategories, { x: "100%" }, drawerSpring);
  });
}

//desktop menu

const deskButton = document.getElementById("categories-button");
const deskButtonText = deskButton?.querySelector("span");
const deskMenu = document.getElementById("categories-menu");

const desktopDeptLinks = document.querySelectorAll(".desktop-dept-link");

function clearActiveStates() {
  if (deskButtonText) {
    deskButtonText.classList.remove("text-blue-600");
    deskButtonText.classList.add("text-black");
  }

  desktopDeptLinks.forEach((link) => {
    link.classList.remove("text-blue-600");
  });
}


if (deskButton && deskMenu) {
  deskButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = !deskMenu.classList.contains("hidden");
    const isCategoryMode = !deskMenu.classList.contains("is-department-view");

    if (isOpen && isCategoryMode) {
      deskMenu.classList.add("hidden");
      clearActiveStates();
      return;
    }

    deskMenu.classList.remove("hidden");
    deskMenu.classList.remove("is-department-view");

    clearActiveStates();

    if (deskButtonText) {
      deskButtonText.classList.remove("text-black");
      deskButtonText.classList.add("text-blue-600");
    }
  });
}

desktopDeptLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!deskMenu) return;

    const alreadyActive = link.classList.contains("text-blue-600");
    const menuOpen = !deskMenu.classList.contains("hidden");
    const departmentMode = deskMenu.classList.contains("is-department-view");


    if (menuOpen && departmentMode && alreadyActive) {
      deskMenu.classList.add("hidden");
      deskMenu.classList.remove("is-department-view");
      clearActiveStates();
      return;
    }


    deskMenu.classList.remove("hidden");
    deskMenu.classList.add("is-department-view");

    clearActiveStates();
    link.classList.add("text-blue-600");
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu =
    deskMenu && deskMenu.contains(e.target);

  const clickedInsideButton =
    deskButton && deskButton.contains(e.target);

  const clickedOnDepartment =
    [...desktopDeptLinks].some((link) =>
      link.contains(e.target)
    );

  if (
    !clickedInsideMenu &&
    !clickedInsideButton &&
    !clickedOnDepartment
  ) {
    deskMenu?.classList.add("hidden");
    deskMenu?.classList.remove("is-department-view");
    clearActiveStates();
  }
});