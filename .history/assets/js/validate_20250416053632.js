// VALIDATE FORM

var loginForm = document.getElementById('loginForm');
var registerForm = document.getElementById('registerForm');

function clearErrors() {
  var errors = document.getElementsByClassName('error');
  for (var i = 0; i < errors.length; i++) {
    errors[i].innerHTML = '';
  }
}

function clearLoginForm() {
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginEmailError').innerHTML = '';
  document.getElementById('loginPasswordError').innerHTML = '';
}

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
