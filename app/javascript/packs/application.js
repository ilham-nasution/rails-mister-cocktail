import 'bootstrap';
import Typed from 'typed.js';

const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-cocktail');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-cocktail-dark');
      } else {
        navbar.classList.remove('navbar-cocktail-dark');
      }
    });
  }
}

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Welcome to Mister Cocktail!"],
    typeSpeed: 50,
    loop: false
  });
}

loadDynamicBannerText();
initUpdateNavbarOnScroll();
