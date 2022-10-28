const form = document.querySelector('.footer-input-form');

const { Fullname, Email, message } = form.elements;

if (!localStorage.getItem('formObjectData')) {
  const formData = { fnameData: '', emailData: '', messageData: '' };
  localStorage.setItem('formObjectData', JSON.stringify(formData));
} else {
  const formData = JSON.parse(localStorage.getItem('formObjectData'));

  Fullname.value = formData.fnameData;
  Email.value = formData.emailData;

  message.value = formData.messageData;
}
const reservedata = (element, val) => {
  element.addEventListener('change', () => {
    const data = element.value;
    const formData = JSON.parse(localStorage.getItem('formObjectData'));
    formData[val] = data;
    localStorage.setItem('formObjectData', JSON.stringify(formData));
  });
};

reservedata(Fullname, 'fnameData');
reservedata(Email, 'emailData');
reservedata(message, 'messageData');
