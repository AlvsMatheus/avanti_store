import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const easeOutSmooth = [0.22, 1, 0.36, 1];

const categoriesMenu = document.getElementById("categories-menu");

if (categoriesMenu) {
  const dropdownObserver = new MutationObserver(() => {
    if (!categoriesMenu.classList.contains("hidden")) {
      animate(
        categoriesMenu,
        { opacity: [0, 1], y: [-10, 0] },
        { duration: 0.25, easing: easeOutSmooth }
      );

      const columns = categoriesMenu.querySelectorAll(":scope > div > *");
      animate(
        columns,
        { opacity: [0, 1], y: [10, 0] },
        { delay: stagger(0.06), duration: 0.3, easing: easeOutSmooth }
      );
    }
  });

  dropdownObserver.observe(categoriesMenu, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

function revealCardsOnInsert(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cardsObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;

        inView(
          node,
          () => {
            animate(
              node,
              { opacity: [0, 1], y: [24, 0] },
              { duration: 0.5, easing: easeOutSmooth }
            );
          },
          { margin: "0px 0px -10% 0px" }
        );
      });
    });
  });

  cardsObserver.observe(container, { childList: true });
}

revealCardsOnInsert("productsCarousel");
revealCardsOnInsert("productsCarousel2");

document.querySelectorAll(".reveal-fade-up").forEach((el) => {
  inView(
    el,
    () => animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.6, easing: easeOutSmooth }),
    { margin: "0px 0px -15% 0px" }
  );
});

document.querySelectorAll(".reveal-left").forEach((el) => {
  inView(
    el,
    () => animate(el, { opacity: [0, 1], x: [-32, 0] }, { duration: 0.6, easing: easeOutSmooth }),
    { margin: "0px 0px -15% 0px" }
  );
});

document.querySelectorAll(".reveal-right").forEach((el) => {
  inView(
    el,
    () => animate(el, { opacity: [0, 1], x: [32, 0] }, { duration: 0.6, easing: easeOutSmooth }),
    { margin: "0px 0px -15% 0px" }
  );
});

document.querySelectorAll(".reveal-stagger").forEach((group) => {
  const items = Array.from(group.children);

  inView(
    group,
    () =>
      animate(
        items,
        { opacity: [0, 1], y: [20, 0] },
        { delay: stagger(0.1), duration: 0.5, easing: easeOutSmooth }
      ),
    { margin: "0px 0px -15% 0px" }
  );
});