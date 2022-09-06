const submitBtn = document.querySelector('.footerButton');
const validateEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', () => {
  const emailVal = document.getElementById('mail').value;
  if (!validateEmail(emailVal)) {
    document.querySelector('.txtt').innerHTML = ' please enter correct email in lower case eg abcde@fgh.com';
  }
});