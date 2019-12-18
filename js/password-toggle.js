let email = {},
  password = {},
  signInButton;

let emaillabel;
let passwordlabel;
let emailcorrect = false;

const isValidEmailAddress = function(emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const validate = function() {
  email = document.querySelector('.js-email-input');
  emaillabel = document.querySelector('.js-email-label');
  password = document.querySelector('.js-password-input');
  passwordlabel = document.querySelector('.js-password-label');

  email.addEventListener('input', function() {
    console.log(email.value);
    if (isValidEmailAddress(email.value) == false) {
      emaillabel.innerHTML = 'Email address this email is invalid!  ';
      emaillabel.classList.add('has-error');
      emailcorrect = false;
    } else {
      emaillabel.innerHTML = 'Email address';
      emaillabel.classList.remove('has-error');
      emailcorrect = true;
    }
  });

  password.addEventListener('input', function() {
    if (email.value == '') {
      emaillabel.innerHTML = 'Email address this field is required!';
      emaillabel.classList.add('has-error');
    } else {
      emaillabel.innerHTML = 'Email address';
      emaillabel.classList.remove('has-error');
    }
  });
};

const submit = function() {
  signInButton = document.querySelector('.js-submit');
  emaillabel = document.querySelector('.js-email-label');

  signInButton.addEventListener('click', function() {
    if (emailcorrect == false) {
      emaillabel.innerHTML = 'Email address this field is required!';
      emaillabel.classList.add('has-error');
    } else {
      console.log(emailcorrect);
      emaillabel.innerHTML = 'Bedankt voor uw registratie!';
    }
  });
};

const init = function() {
  submit();
  validate();
};

document.addEventListener('DOMContentLoaded', init);
