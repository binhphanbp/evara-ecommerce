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
// Validate form đăng nhập
document.getElementById('loginForm').onsubmit = function (event) {
  event.preventDefault(); // Ngăn form gửi đi để kiểm tra

  // Lấy giá trị từ input
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  // Kiểm tra rỗng
  if (email === '') {
    alert('Vui lòng nhập email!');
    return false;
  }
  if (password === '') {
    alert('Vui lòng nhập mật khẩu!');
    return false;
  }

  // Kiểm tra email có chứa @ và . không (không dùng regex)
  var hasAt = false;
  var hasDot = false;
  for (var i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      hasAt = true;
    }
    if (email[i] === '.') {
      hasDot = true;
    }
  }
  if (!hasAt || !hasDot) {
    alert('Email phải chứa ký tự @ và .!');
    return false;
  }

  // Nếu không có lỗi, báo thành công (hoặc xử lý đăng nhập)
  alert('Đăng nhập thành công!');
  // Bạn có thể thêm code để kiểm tra email/mật khẩu với localStorage nếu cần
};

// Validate form đăng ký
document.getElementById('registerForm').onsubmit = function (event) {
  event.preventDefault(); // Ngăn form gửi đi để kiểm tra

  // Lấy giá trị từ input
  var name = document.getElementById('registerName').value;
  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;
  var confirmPassword = document.getElementById(
    'registerConfirmPassword'
  ).value;

  // Kiểm tra rỗng
  if (name === '') {
    alert('Vui lòng nhập họ tên!');
    return false;
  }
  if (email === '') {
    alert('Vui lòng nhập email!');
    return false;
  }
  if (password === '') {
    alert('Vui lòng nhập mật khẩu!');
    return false;
  }
  if (confirmPassword === '') {
    alert('Vui lòng nhập xác nhận mật khẩu!');
    return false;
  }

  // Kiểm tra email có chứa @ và . không
  var hasAt = false;
  var hasDot = false;
  for (var i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      hasAt = true;
    }
    if (email[i] === '.') {
      hasDot = true;
    }
  }
  if (!hasAt || !hasDot) {
    alert('Email phải chứa ký tự @ và .!');
    return false;
  }

  // Kiểm tra mật khẩu khớp
  if (password !== confirmPassword) {
    alert('Mật khẩu và xác nhận mật khẩu không khớp!');
    return false;
  }

  // Lưu thông tin vào localStorage
  var user = {
    name: name,
    email: email,
    password: password,
  };
  localStorage.setItem('user_' + email, JSON.stringify(user));

  // Báo thành công
  alert('Đăng ký thành công!');
};
