const submitBtn = document.querySelector('.footerButton');
const validateEmail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

submitBtn.addEventListener('click', (event) => {
  const emailVal = document.getElementById('mail').value;
  
  if (!validateEmail(emailVal)) {
    alert("Invalid format");
    event.preventDefault();
  }
});