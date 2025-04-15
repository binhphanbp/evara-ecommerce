/*=============== RENDER PRODUCT CARD ===============*/
let products = [
  {
    id: 1,
    category: 'Clothing',
    title: 'Colorful Pattern Shirts',
    newPrice: 29.99,
    oldPrice: 35.99,
    imageDefault: 'assets/img/product-1-1.jpg',
    imageHover: 'assets/img/product-1-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-pink',
    link: 'details.html?id=1',
  },
  {
    id: 2,
    category: 'Clothing',
    title: 'Plain Cotton T-Shirt',
    newPrice: 19.5,
    oldPrice: 24.99,
    imageDefault: 'assets/img/product-2-1.jpg',
    imageHover: 'assets/img/product-2-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-green',
    link: 'details.html?id=2',
  },
  {
    id: 3,
    category: 'Clothing',
    title: 'Vintage Denim Jacket',
    newPrice: 59.99,
    oldPrice: 69.99,
    imageDefault: 'assets/img/product-3-1.jpg',
    imageHover: 'assets/img/product-3-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-orange',
    link: 'details.html?id=3',
  },
  {
    id: 4,
    category: 'Clothing',
    title: 'Checkered Flannel Shirt',
    newPrice: 34.75,
    oldPrice: 39.99,
    imageDefault: 'assets/img/product-4-1.jpg',
    imageHover: 'assets/img/product-4-2.jpg',
    badge: 'Hot',
    badgeClass: 'light-blue',
    link: 'details.html?id=4',
  },
  {
    id: 5,
    category: 'Clothing',
    title: 'Striped Polo Shirt',
    newPrice: 25.99,
    oldPrice: 32.5,
    imageDefault: 'assets/img/product-5-1.jpg',
    imageHover: 'assets/img/product-5-2.jpg',
    badge: '-30%',
    badgeClass: 'light-blue',
    link: 'details.html?id=5',
  },
  {
    id: 6,
    category: 'Clothing',
    title: 'Floral Summer Dress',
    newPrice: 45.0,
    oldPrice: 55.0,
    imageDefault: 'assets/img/product-6-1.jpg',
    imageHover: 'assets/img/product-6-2.jpg',
    badge: '-22%',
    badgeClass: 'light-blue',
    link: 'details.html?id=6',
  },
  {
    id: 7,
    category: 'Clothing',
    title: 'Polka Dot Blouse',
    newPrice: 27.8,
    oldPrice: 34.99,
    imageDefault: 'assets/img/product-7-1.jpg',
    imageHover: 'assets/img/product-7-2.jpg',
    badge: '-22%',
    badgeClass: 'light-green',
    link: 'details.html?id=7',
  },
  {
    id: 8,
    category: 'Clothing',
    title: 'Denim Shorts',
    newPrice: 22.99,
    oldPrice: 29.99,
    imageDefault: 'assets/img/product-8-1.jpg',
    imageHover: 'assets/img/product-8-2.jpg',
    badge: '',
    badgeClass: '',
    link: 'details.html?id=8',
  },
];

function renderProducts() {
  let productList = document.getElementById('productList');

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let badgeHTML = product.badge
      ? `<div class="product__badge ${product.badgeClass}">${product.badge}</div>`
      : '';

    let productHTML = `
            <div class="product__item">
                <div class="product__banner">
                    <a href="${product.link}" class="product__images">
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
                    <span class="product__category">${product.category}</span>
                    <a href="${product.link}">
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
}
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

// VALIDATE FORM
// Lấy form
var loginForm = document.getElementById('loginForm');
var registerForm = document.getElementById('registerForm');

// Hàm xóa lỗi trước khi validate lại
function clearErrors() {
  var errors = document.getElementsByClassName('error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = '';
  }
}

// Hàm xóa form Login
function clearLoginForm() {
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginEmailError').innerHTML = '';
  document.getElementById('loginPasswordError').innerHTML = '';
}

// Hàm xóa form Register
function clearRegisterForm() {
  document.getElementById('regUsername').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('regConfirmPassword').value = '';
  document.getElementById('regUsernameError').innerHTML = '';
  document.getElementById('regEmailError').innerHTML = '';
  document.getElementById('regPasswordError').innerHTML = '';
  document.getElementById('regConfirmPasswordError').innerHTML = '';
}

// Validate form Login
loginForm.onsubmit = function () {
  clearErrors();

  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  var hasError = false;

  if (email == '') {
    document.getElementById('loginEmailError').innerHTML =
      'Please enter email!';
    hasError = true;
  } else {
    var hasAtSymbol = false;
    for (var i = 0; i < email.length; i++) {
      if (email[i] == '@') {
        hasAtSymbol = true;
        break;
      }
    }
    if (hasAtSymbol == false) {
      document.getElementById('loginEmailError').innerHTML =
        "Email must have '@'!";
      hasError = true;
    }
  }

  if (password == '') {
    document.getElementById('loginPasswordError').innerHTML =
      'Please enter password!';
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById('loginPasswordError').innerHTML =
      'Password must be more than 5 characters!';
    hasError = true;
  }

  if (hasError) {
    return false;
  }

  var userData = localStorage.getItem('user');
  if (userData == null) {
    alert('Account does not exist, please register!');
    return false;
  }

  userData = JSON.parse(userData);

  if (userData.email == email && userData.password == password) {
    alert('Login successful!');

    window.location.href = 'index.html';
  } else {
    alert('Account does not exist, please register!');
  }

  clearLoginForm();

  return false;
};

// Validate form Register
registerForm.onsubmit = function () {
  clearErrors();

  var username = document.getElementById('regUsername').value;
  var email = document.getElementById('regEmail').value;
  var password = document.getElementById('regPassword').value;
  var confirmPassword = document.getElementById('regConfirmPassword').value;

  var hasError = false;

  if (username == '') {
    document.getElementById('regUsernameError').innerHTML =
      'Please enter username!';
    hasError = true;
  } else if (username.length <= 5) {
    document.getElementById('regUsernameError').innerHTML =
      'Username must be more than 5 characters!';
    hasError = true;
  }

  if (email == '') {
    document.getElementById('regEmailError').innerHTML = 'Please enter email!';
    hasError = true;
  } else {
    var hasAtSymbol = false;
    for (var i = 0; i < email.length; i++) {
      if (email[i] == '@') {
        hasAtSymbol = true;
        break;
      }
    }
    if (hasAtSymbol == false) {
      document.getElementById('regEmailError').innerHTML =
        "Email must have '@'!";
      hasError = true;
    }
  }

  if (password == '') {
    document.getElementById('regPasswordError').innerHTML =
      'Please enter password!';
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById('regPasswordError').innerHTML =
      'Password must be more than 5 characters!';
    hasError = true;
  }

  if (confirmPassword == '') {
    document.getElementById('regConfirmPasswordError').innerHTML =
      'Please enter confirm password!';
    hasError = true;
  } else if (password != confirmPassword) {
    document.getElementById('regConfirmPasswordError').innerHTML =
      'Confirm password does not match!';
    hasError = true;
  }

  if (hasError) {
    return false;
  }

  var userData = {
    username: username,
    email: email,
    password: password,
  };
  localStorage.setItem('user', JSON.stringify(userData));

  alert('Register successful!');

  clearRegisterForm();

  return false;
};
