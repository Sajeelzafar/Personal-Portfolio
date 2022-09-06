const form = document.querySelector('.footer-input-form');

const { Fullname, Email, message } = form.elements;

if (!localStorage.getItem('formObjectData')) {
  const formData = { fnameData: '', emailData: '', messageData: '' };
  localStorage.setItem('formObjectData', JSON.stringify(formData));
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