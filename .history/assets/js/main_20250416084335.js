/*=============== RENDER PRODUCT CARD ===============*/
let products = [
  {
    id: 1,
    category: 'Shirts',
    title: 'Colorful Pattern Shirts',
    newPrice: 29.99,
    oldPrice: 35.99,
    imageDefault: 'assets/img/product-1-1.jpg',
    imageHover: 'assets/img/product-1-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-pink',
    link: 'details.html',
    brand: 'Adidas',
    description: 'A vibrant and stylish shirt perfect for casual outings.',
    sku: 'FWM15VKT001',
    tags: 'Clothes, Men, Shirt',
    stock: 10,
    colors: ['hsl(37, 100%, 65%)', 'hsl(353, 100%, 65%)', 'hsl(49, 100%, 60%)'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 2,
    category: 'Shirts',
    title: 'Plain Cotton T-Shirt',
    newPrice: 19.5,
    oldPrice: 24.99,
    imageDefault: 'assets/img/product-2-1.jpg',
    imageHover: 'assets/img/product-2-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-green',
    link: 'details.html',
    brand: 'Nike',
    description: 'Comfortable cotton t-shirt for everyday wear.',
    sku: 'FWM15VKT002',
    tags: 'Clothes, Unisex, T-Shirt',
    stock: 15,
    colors: ['hsl(304, 100%, 78%)', 'hsl(126, 61%, 52%)'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 3,
    category: 'Shoes',
    title: 'Vintage Denim Jacket',
    newPrice: 59.99,
    oldPrice: 69.99,
    imageDefault: 'assets/img/product-3-1.jpg',
    imageHover: 'assets/img/product-3-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-orange',
    link: 'details.html',
    brand: "Levi's",
    description: 'Classic denim jacket with a retro vibe.',
    sku: 'FWM15VKT003',
    tags: 'Clothes, Unisex, Jacket',
    stock: 8,
    colors: ['hsl(37, 100%, 65%)', 'hsl(49, 100%, 60%)', 'hsl(126, 61%, 52%)'],
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 4,
    category: 'Pants',
    title: 'Checkered Flannel Shirt',
    newPrice: 34.75,
    oldPrice: 39.99,
    imageDefault: 'assets/img/product-4-1.jpg',
    imageHover: 'assets/img/product-4-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'Zara',
    description: 'Cozy flannel shirt with a checkered pattern.',
    sku: 'FWM15VKT004',
    tags: 'Clothes, Men, Shirt',
    stock: 12,
    colors: ['hsl(353, 100%, 65%)', 'hsl(304, 100%, 78%)'],
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 5,
    category: 'Accessories',
    title: 'Striped Polo Shirt',
    newPrice: 25.99,
    oldPrice: 32.5,
    imageDefault: 'assets/img/product-5-1.jpg',
    imageHover: 'assets/img/product-5-2.jpg',
    badge: '-30%',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'Puma',
    description: 'Sporty polo shirt with stylish stripes.',
    sku: 'FWM15VKT005',
    tags: 'Clothes, Men, Polo',
    stock: 20,
    colors: ['hsl(37, 100%, 65%)', 'hsl(126, 61%, 52%)', 'hsl(49, 100%, 60%)'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 6,
    category: 'Shirts',
    title: 'Floral Summer Dress',
    newPrice: 45.0,
    oldPrice: 55.0,
    imageDefault: 'assets/img/product-6-1.jpg',
    imageHover: 'assets/img/product-6-2.jpg',
    badge: '-22%',
    badgeClass: 'light-blue',
    link: 'details.html',
    brand: 'H&M',
    description: 'Light and breezy dress for summer days.',
    sku: 'FWM15VKT006',
    tags: 'Clothes, Women, Dress',
    stock: 6,
    colors: ['hsl(304, 100%, 78%)', 'hsl(353, 100%, 65%)'],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    category: 'Shirts',
    title: 'Polka Dot Blouse',
    newPrice: 27.8,
    oldPrice: 34.99,
    imageDefault: 'assets/img/product-7-1.jpg',
    imageHover: 'assets/img/product-7-2.jpg',
    badge: '-22%',
    badgeClass: 'light-green',
    link: 'details.html',
    brand: 'Mango',
    description: 'Elegant blouse with a playful polka dot design.',
    sku: 'FWM15VKT007',
    tags: 'Clothes, Women, Blouse',
    stock: 9,
    colors: ['hsl(49, 100%, 60%)', 'hsl(126, 61%, 52%)'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 8,
    category: 'Shirts',
    title: 'Denim Shorts',
    newPrice: 22.99,
    oldPrice: 29.99,
    imageDefault: 'assets/img/product-8-1.jpg',
    imageHover: 'assets/img/product-8-2.jpg',
    badge: '',
    badgeClass: '',
    link: 'details.html',
    brand: 'Uniqlo',
    description: 'Casual denim shorts for a relaxed look.',
    sku: 'FWM15VKT008',
    tags: 'Clothes, Unisex, Shorts',
    stock: 14,
    colors: [
      'hsl(37, 100%, 65%)',
      'hsl(353, 100%, 65%)',
      'hsl(304, 100%, 78%)',
    ],
    sizes: ['M', 'L', 'XL'],
  },
];

function renderProducts() {
  let productList = document.getElementById('productList');
  if (!productList) return;

  productList.innerHTML = '';

  // Loop through the list of products and render each one
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    // Create the HTML for the product badge
    let badgeHTML = product.badge
      ? `<div class="product__badge ${product.badgeClass}">${product.badge}</div>`
      : '';

    // Create the HTML for the product
    let productHTML = `
                    <div class="product__item">
                        <div class="product__banner">
                            <a href="details.html" class="product__images" data-id="${
                              product.id
                            }">
                                <img src="${product.imageDefault}" alt="${
      product.title
    }" class="product__img default">
                                <img src="${product.imageHover}" alt="${
      product.title
    }" class="product__img hover">
                            </a>
                            <div class="product__actions">
                                <a href="#" class="action__btn" aria-label="Quick View" data-id="${
                                  product.id
                                }">
                                    <i class="fi fi-rs-eye"></i>
                                </a>
                                <a href="#" class="action__btn" aria-label="Add to Wishlist" data-id="${
                                  product.id
                                }">
                                    <i class="fi fi-rs-heart"></i>
                                </a>
                                <a href="#" class="action__btn" aria-label="Compare" data-id="${
                                  product.id
                                }">
                                    <i class="fi fi-rs-shuffle"></i>
                                </a>
                            </div>
                            ${badgeHTML}
                        </div>
                        <div class="product__content">
                            <span class="product__category">${
                              product.category
                            }</span>
                            <a href="details.html" class="product__title-link" data-id="${
                              product.id
                            }">
                                <h3 class="product__title">${product.title}</h3>
                            </a>
                            <div class="product__rating">
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                                <i class="fi fi-rs-star"></i>
                            </div>
                            <div class="product__price flex">
                                <span class="new__price">$${product.newPrice.toFixed(
                                  2
                                )}</span>
                                <span class="old__price">$${product.oldPrice.toFixed(
                                  2
                                )}</span>
                            </div>
                            <a href="#" class="action__btn cart__btn" aria-label="Add To Cart" data-id="${
                              product.id
                            }">
                                <i class="fi fi-rs-shopping-bag-add"></i>
                            </a>
                        </div>
                    </div>
                `;
    productList.innerHTML += productHTML;
  }

  // Attach events to the links and buttons
  attachEvents();
}

function attachEvents() {
  let productLinks = document.querySelectorAll(
    '.product__images, .product__title-link'
  );
  for (let i = 0; i < productLinks.length; i++) {
    productLinks[i].onclick = function (event) {
      event.preventDefault();
      let productId = this.getAttribute('data-id');
      let selectedProduct = null;
      for (let j = 0; j < products.length; j++) {
        if (products[j].id == productId) {
          selectedProduct = products[j];
          break;
        }
      }
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
      window.location.href = 'details.html';
    };
  }

  let cartButtons = document.querySelectorAll('.cart__btn');
  for (let i = 0; i < cartButtons.length; i++) {
    cartButtons[i].onclick = function (event) {
      event.preventDefault();
      let productId = this.getAttribute('data-id');
      cart.add(productId);
      alert('Đã thêm sản phẩm vào giỏ hàng!');
    };
  }
}

cart.load();
renderProducts();

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
    smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper('.categories__container', {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper('.new__container', {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabsContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove('active-tab');
    });

    target.classList.add('active-tab');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tab.classList.add('active-tab');
  });
});

// SLIDER
const slideItems = [
  {
    img: './assets/img/slider-banner-01.jpg',
  },
  {
    img: './assets/img/slider-banner-02.webp',
  },
  {
    img: './assets/img/slider-banner-03.webp',
  },
];
class Slide {
  constructor(img) {
    this.img = img;
  }
}
const slides = slideItems.map((slide) => {
  return new Slide(slide.img);
});

console.log(slides);

class Slider {
  constructor(slides) {
    this.slides = slides;
    this.slideItemContainer = document.querySelector('.js-sliderItemContainer');
  }

  init() {
    const slideItemHTML = this.slides
      .map((slide, index) => {
        let position = 'next';
        if (index === 0) {
          position = 'active';
        }
        if (index === this.slides.length - 1) {
          position = 'last';
        }
        if (this.slides.length <= 1) {
          position = 'active';
        }
        return `<a href="#" class="slider__item js-sliderItem ${position}">
                  <img class="slider__item__image" src="${slide.img}" alt="Shopping">
                &gt;</a>`;
      })
      .join('');

    this.slideItemContainer.innerHTML = slideItemHTML;

    const buttonPrev = document.querySelector('.js-btnPrev');
    const buttonNext = document.querySelector('.js-btnNext');

    buttonNext.addEventListener('click', () => {
      this.changeSlider();
    });

    buttonPrev.addEventListener('click', () => {
      this.changeSlider('prev');
    });
  }

  changeSlider(type) {
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next = active.nextElementSibling;
    if (!next) {
      next = this.slideItemContainer.firstElementChild;
    }
    active.classList.remove('active');
    last.classList.remove('last');
    next.classList.remove('next');

    if (type === 'prev') {
      active.classList.add('next');
      last.classList.add('active');
      let next = last.previousElementSibling;
      if (!next) {
        next = this.slideItemContainer.lastElementChild;
      }
      next.classList.remove('next');
      next.classList.add('last');
      return;
    }

    active.classList.add('last');
    next.classList.add('active');
    last.classList.add('next');
  }
}

const slider = new Slider(slides);

console.log(slider.init());
