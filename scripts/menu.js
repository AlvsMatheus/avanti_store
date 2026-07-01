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
    mobileMenu.classList.remove("-translate-x-full");
  });
}


function closeMobileMenu() {
  mobileMenu.classList.add("-translate-x-full");

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


//LÓGICA PARA DESKTOP 

{
  const deskButton = document.getElementById("categories-button");
  const deskButtonText = deskButton ? deskButton.querySelector("span") : null;
  const deskMenu = document.getElementById("categories-menu");
  const desktopDeptLinks = document.querySelectorAll(".desktop-dept-link");

  // Função auxiliar para remover o azul de TODOS os elementos
  function clearActiveStates() {
    if (deskButtonText) {
      deskButtonText.classList.remove("text-blue-600");
      deskButtonText.classList.add("text-black");
    }
    desktopDeptLinks.forEach(link => {
      link.classList.remove("text-blue-600");
    });
  }

  // Clique em "Todas as Categorias"
  if (deskButton && deskMenu) {
    deskButton.addEventListener("click", (e) => {
      e.stopPropagation();
      
      if (!deskMenu.classList.contains("hidden") && !deskMenu.classList.contains("is-department-view")) {
        deskMenu.classList.add("hidden");
        clearActiveStates();
      } else {
        deskMenu.classList.remove("hidden");
        deskMenu.classList.remove("is-department-view");
        
        clearActiveStates();
        if (deskButtonText) {
          deskButtonText.classList.remove("text-black");
          deskButtonText.classList.add("text-blue-600");
        }
      }
    });
  }

  // Clique em um Departamento da Navbar
  desktopDeptLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); 
      e.stopPropagation();

      if (deskMenu) {

        const isCurrentActive = link.classList.contains("text-blue-600");
        const isMenuOpen = !deskMenu.classList.contains("hidden");
        const isDeptView = deskMenu.classList.contains("is-department-view");

        if (isMenuOpen && isDeptView && isCurrentActive) {
          deskMenu.classList.add("hidden");
          clearActiveStates();
        } else {
          
          deskMenu.classList.add("is-department-view");
          deskMenu.classList.remove("hidden");
          
          clearActiveStates();
          link.classList.add("text-blue-600");
        }
      }
    });
  });

 
  document.addEventListener("click", (e) => {
    if (deskMenu && !deskMenu.contains(e.target) && e.target !== deskButton) {
      deskMenu.classList.add("hidden");
      clearActiveStates(); 
    }
  });
}