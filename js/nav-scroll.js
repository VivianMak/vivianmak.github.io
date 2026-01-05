// nav-scroll.js

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down → hide navbar
        navbar.classList.add('navbar--hidden');
    } else {
        // Scrolling up → show navbar
        navbar.classList.remove('navbar--hidden');
    }

    lastScrollY = currentScrollY;
});
