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
function clearErrors(formId) {
  var errors = document.getElementsByClassName('error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = '';
  }
}

// Validate form Login
loginForm.onsubmit = function () {
  // Xóa lỗi cũ
  clearErrors();

  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  var hasError = false;

  // Kiểm tra email rỗng
  if (email == '') {
    document.getElementById('loginEmailError').innerHTML =
      'Vui lòng nhập email!';
    hasError = true;
  } else {
    // Kiểm tra email có ký tự '@' không
    var hasAtSymbol = false;
    for (var i = 0; i < email.length; i++) {
      if (email[i] == '@') {
        hasAtSymbol = true;
        break;
      }
    }
    if (hasAtSymbol == false) {
      document.getElementById('loginEmailError').innerHTML =
        "Email phải có ký tự '@'!";
      hasError = true;
    }
  }

  // Kiểm tra password
  if (password == '') {
    document.getElementById('loginPasswordError').innerHTML =
      'Vui lòng nhập password!';
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById('loginPasswordError').innerHTML =
      'Password phải dài hơn 5 ký tự!';
    hasError = true;
  }

  if (hasError) {
    return false;
  }

  // Nếu không có lỗi, hiển thị thông báo thành công
  document.getElementById('loginEmailError').innerHTML =
    'Đăng nhập thành công! (Demo)';
  return false; // Tạm thời không gửi form, chỉ hiển thị thông báo
};

// Validate form Register
registerForm.onsubmit = function () {
  // Xóa lỗi cũ
  clearErrors();

  var username = document.getElementById('regUsername').value;
  var email = document.getElementById('regEmail').value;
  var password = document.getElementById('regPassword').value;
  var confirmPassword = document.getElementById('regConfirmPassword').value;

  var hasError = false;

  // Kiểm tra username
  if (username == '') {
    document.getElementById('regUsernameError').innerHTML =
      'Vui lòng nhập username!';
    hasError = true;
  } else if (username.length <= 6) {
    // Thêm kiểm tra độ dài username
    document.getElementById('regUsernameError').innerHTML =
      'Username phải dài hơn 6 ký tự!';
    hasError = true;
  }

  // Kiểm tra email rỗng
  if (email == '') {
    document.getElementById('regEmailError').innerHTML = 'Vui lòng nhập email!';
    hasError = true;
  } else {
    // Kiểm tra email có ký tự '@' không
    var hasAtSymbol = false;
    for (var i = 0; i < email.length; i++) {
      if (email[i] == '@') {
        hasAtSymbol = true;
        break;
      }
    }
    if (hasAtSymbol == false) {
      document.getElementById('regEmailError').innerHTML =
        "Email phải có ký tự '@'!";
      hasError = true;
    }
  }

  // Kiểm tra password
  if (password == '') {
    document.getElementById('regPasswordError').innerHTML =
      'Vui lòng nhập password!';
    hasError = true;
  } else if (password.length < 6) {
    document.getElementById('regPasswordError').innerHTML =
      'Password phải dài hơn 5 ký tự!';
    hasError = true;
  }

  if (confirmPassword == '') {
    document.getElementById('regConfirmPasswordError').innerHTML =
      'Vui lòng nhập lại password!';
    hasError = true;
  } else if (password != confirmPassword) {
    document.getElementById('regConfirmPasswordError').innerHTML =
      'Password nhập lại không khớp!';
    hasError = true;
  }

  if (hasError) {
    return false;
  }

  // Nếu không có lỗi, hiển thị thông báo thành công
  document.getElementById('regEmailError').innerHTML =
    'Đăng ký thành công! (Demo)';
  return false; // Tạm thời không gửi form, chỉ hiển thị thông báo
};
