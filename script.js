const hamburger = document.querySelector('.navicon');
const navMenu = document.querySelector('.navblock');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navblock > li').forEach((n) => (
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })));

