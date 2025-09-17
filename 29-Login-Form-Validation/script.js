$(document).ready(function () {
  const emailGroup = $('#email-group');
  const emailInput = $('#email');
  const emailError = $('#email-error');
  const passwordGroup = $('#password-group');
  const passwordInput = $('#password');
  const passwordError = $('#password-error');

  emailInput.on('keyup', function () {
    checkEmail();
  });


  passwordInput.on('keyup', function () {
    checkPassword();
  });

  // Email validation function
  function checkEmail() {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const email = emailInput.val().trim();
    if (email === '') {
      emailGroup.addClass('error shake').removeClass('valid');
      emailError.text("Email can't be blank");
    } else if (!email.match(pattern)) {
      emailGroup.addClass('error shake').removeClass('valid');
      emailError.text('Enter a valid email address');
    } else {
      emailGroup.removeClass('error shake').addClass('valid');
    }
    setTimeout(() => emailGroup.removeClass('shake'), 300);
  }

  // Password validation function
  function checkPassword() {
    const password = passwordInput.val().trim();
    if (password === '') {
      passwordGroup.addClass('error shake').removeClass('valid');
      passwordError.text("Password can't be blank");
    } else {
      passwordGroup.removeClass('error shake').addClass('valid');
    }
    setTimeout(() => passwordGroup.removeClass('shake'), 300);
  }

  // Form submission
  $('#loginForm').submit(function (e) {
    e.preventDefault();

    emailGroup.removeClass('error shake valid');
    passwordGroup.removeClass('error shake valid');


    checkEmail();
    checkPassword();

    if (!emailGroup.hasClass('error') && !passwordGroup.hasClass('error')) {
      alert('Login successful');


      emailInput.val('');
      passwordInput.val('');

    } else {
      console.log('Form has errors, shaking invalid fields');
    }
  });
});
