//header


//Swiper logic

const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});


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
    id: 2,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 3,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 4,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 5,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 6,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 7,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 8,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 9,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 10,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 11,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 12,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 13,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 14,
    badge: "NOVO",
    image: "images/products/tshirt_white.png",
    title: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
    oldPrice: 100.00,
    price: 79.90,
    discount: "10% OFF",
    installments: "10x de R$ 7,90"
  },
  {
    id: 15,
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
    <div class="swiper-slide h-auto">
      <div class="product-card relative h-full bg-white border border-gray-300 rounded-lg p-4 flex flex-col">

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
    </div>
  `;
}

function initShelf(containerId, productsList) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = productsList
    .map(product => createProductCard(product))
    .join('');
}

document.addEventListener("DOMContentLoaded", () => {

  initShelf("productsCarousel", mockProducts);
  initShelf("productsCarousel2", mockProducts);

  // Shelf 1
  new Swiper(".shelfSwiper", {
    loop: true,

    grabCursor: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: "#nextBtn",
      prevEl: "#prevBtn",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24,
      },

      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 24,
      }
    }
  });

  // Shelf 2
  new Swiper(".shelfSwiper2", {
  loop: true,

  grabCursor: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: "#nextBtn2",
    prevEl: "#prevBtn2",
  },

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 16,

  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 24,
    }
  }
});

});