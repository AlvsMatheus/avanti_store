// ==========================================
// MOCK DE DADOS & RENDERIZAÇÃO (Shelf)
// ==========================================

const mockProducts = [
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 1,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  }
];

function createProductCard(product) {
  return `
    <div class="product-card relative min-w-[48%] md:min-w-[210px] bg-white border border-gray-300 rounded-lg p-4 flex flex-col">
      ${product.badge ? `
        <span class="absolute top-3 left-3 text-xs bg-[#00264e] text-white px-2 py-[2px] rounded">
          ${product.badge}
        </span>
      ` : ''}

      <div class="flex justify-center mb-3">
        <img src="${product.image}" alt="${product.title}" class="h-[150px] object-contain" />
      </div>

      <h3 class="text-sm text-gray-700 leading-tight mb-2 line-clamp-2">
        ${product.title}
      </h3>

      <div class="flex items-center gap-2 mb-1">
        <div class="flex flex-col">
          ${product.oldPrice ? `
            <span class="text-xs text-gray-400 line-through">
              R$ ${product.oldPrice.toFixed(2).replace('.', ',')}
            </span>
          ` : ''}
          <span class="text-lg font-semibold">
            R$ ${product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        ${product.discount ? `
          <span class="text-xs bg-[#5EC0BE] text-white px-2 py-[2px] rounded">
            ${product.discount}
          </span>
        ` : ''}
      </div>

      <p class="text-xs text-gray-500 mb-3">
        Ou em até <span class="font-medium">${product.installments}</span>
      </p>

      <button class="mt-auto bg-[rgb(0,92,255)] text-white text-sm py-2 rounded hover:bg-blue-700 transition-colors">
        Comprar
      </button>
    </div>
  `;
}

function initShelf(containerId, productsList) {
  const carousel = document.getElementById(containerId);
  if (!carousel) return;

  const listContainer = carousel.querySelector('.flex');
  if (!listContainer) return;

  listContainer.innerHTML = productsList.map(product => createProductCard(product)).join('');
}


document.addEventListener("DOMContentLoaded", () => {
  
  initShelf("productsCarousel", mockProducts);
  initShelf("productsCarousel2", mockProducts);

  const carousel = document.getElementById("productsCarousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const indicators = document.querySelectorAll("#carouselIndicators span");

  if (nextBtn && carousel) {
    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: 800, behavior: "smooth" });
    });
  }

  if (prevBtn && carousel) {
    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -800, behavior: "smooth" });
    });
  }

  if (carousel && indicators.length > 0) {
    const updateIndicators = () => {
      const scrollLeft = carousel.scrollLeft;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      
      if (maxScrollLeft <= 0) return;

      const percentage = scrollLeft / maxScrollLeft;
      const activeIndex = Math.min(
        Math.round(percentage * (indicators.length - 1)),
        indicators.length - 1
      );

      indicators.forEach((dot, idx) => {
        if (idx === activeIndex) {
          dot.classList.remove("bg-gray-400");
          dot.classList.add("bg-gray-600");
        } else {
          dot.classList.remove("bg-gray-600");
          dot.classList.add("bg-gray-400");
        }
      });
    };

    carousel.addEventListener("scroll", updateIndicators);

    indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"));
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const targetScroll = (maxScrollLeft / (indicators.length - 1)) * index;
        
        carousel.scrollTo({
          left: targetScroll,
          behavior: "smooth"
        });
      });
    });
  }

  const carousel2 = document.getElementById("productsCarousel2");
  const nextBtn2 = document.getElementById("nextBtn2");
  const prevBtn2 = document.getElementById("prevBtn2");

  if (nextBtn2 && carousel2) {
    nextBtn2.addEventListener("click", () => {
      carousel2.scrollBy({ left: 800, behavior: "smooth" });
    });
  }

  if (prevBtn2 && carousel2) {
    prevBtn2.addEventListener("click", () => {
      carousel2.scrollBy({ left: -800, behavior: "smooth" });
    });
  }
});