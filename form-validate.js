const submitBtn = document.querySelector('.footerButton');
const submitBtn2 = document.querySelector('.footerButtonMobile');
const validateEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', (event) => {
  const emailVal = document.getElementById('mail').value;

  if (!validateEmail(emailVal)) {
    document.querySelector('.error').innerHTML = 'Email should be written in small case';
    event.preventDefault();
  }
});

submitBtn2.addEventListener('click', (event) => {
  const emailVal = document.getElementById('mail').value;

  if (!validateEmail(emailVal)) {
    document.querySelector('.error').innerHTML = 'Email should be written in small case';
    event.preventDefault();
  }
});