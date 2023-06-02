/* -------------Mobile menu----------------*/

const nav = document.querySelector('.mobile-menu';
const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');

openButton.addEventListener('click', () => {
  nav.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('visible');
});

const menuLinks = document.querySelectorAll(".mobile-menu a[href^='#']");

menuLinks.forEach((menulink) => {
  menulink.addEventListener('click', () => {
    nav.classList.remove('visible');
  });
});

