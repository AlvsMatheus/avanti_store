//mobile menu

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


if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", () => {
    mobileOverlay.classList.remove("hidden");
    mobileMenu.classList.remove("-translate-x-[101%]");
  });
}


function closeMobileMenu() {
  mobileMenu.classList.add("-translate-x-[101%]");

  setTimeout(() => {
    mobileOverlay.classList.add("hidden");
  }, 300);

  mobileDepartments.classList.add("translate-x-full");
  mobileCategories.classList.add("translate-x-full");
}

if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);


if (openAllCategories) {
  openAllCategories.addEventListener("click", () => {
    mobileDepartments.classList.remove("translate-x-full");
  });
}


if (backToMain) {
  backToMain.addEventListener("click", () => {
    mobileDepartments.classList.add("translate-x-full");
  });
}


departmentItems.forEach((department) => {
  department.addEventListener("click", () => {
    mobileCategories.classList.remove("translate-x-full");
  });
});


if (backToDepartments) {
  backToDepartments.addEventListener("click", () => {
    mobileCategories.classList.add("translate-x-full");
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