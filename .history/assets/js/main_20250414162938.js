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
// Lấy các form
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validate form Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn gửi form mặc định

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  let isValid = true;

  // Kiểm tra email
  if (!email) {
    alert('Email là bắt buộc!');
    isValid = false;
  } else if (!isValidEmail(email)) {
    alert('Email không hợp lệ!');
    isValid = false;
  }

  // Kiểm tra password
  if (!password) {
    alert('Password là bắt buộc!');
    isValid = false;
  } else if (password.length < 6) {
    alert('Password phải dài ít nhất 6 ký tự!');
    isValid = false;
  }

  if (isValid) {
    alert('Login thành công! (Demo)');
    // Gửi dữ liệu đến server nếu cần: loginForm.submit();
  }
});

// Validate form Register
registerForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn gửi form mặc định

  const username = document.getElementById('regUsername').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const confirmPassword = document
    .getElementById('regConfirmPassword')
    .value.trim();

  let isValid = true;

  // Kiểm tra username
  if (!username) {
    alert('Username là bắt buộc!');
    isValid = false;
  }

  // Kiểm tra email
  if (!email) {
    alert('Email là bắt buộc!');
    isValid = false;
  } else if (!isValidEmail(email)) {
    alert('Email không hợp lệ!');
    isValid = false;
  }

  // Kiểm tra password
  if (!password) {
    alert('Password là bắt buộc!');
    isValid = false;
  } else if (password.length < 6) {
    alert('Password phải dài ít nhất 6 ký tự!');
    isValid = false;
  }

  // Kiểm tra confirm password
  if (password !== confirmPassword) {
    alert('Confirm Password không khớp!');
    isValid = false;
  }

  if (isValid) {
    alert('Đăng ký thành công! (Demo)');
    // Gửi dữ liệu đến server nếu cần: registerForm.submit();
  }
});
