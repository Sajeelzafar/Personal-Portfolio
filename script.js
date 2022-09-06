const hamburger = document.querySelector('.navicon');
const navMenu = document.querySelector('.navblock');
// const projects = document.querySelector('.button-box');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navblock > li').forEach((n) => (
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })));

// projects.addEventListener('click', () => {
//   const div = document.createElement('div');
//   alert('button pressed');
// });