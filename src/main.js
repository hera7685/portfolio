'use strict';

// Dark styling for Header 
const header = document.querySelector('.header');  
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    }
    else {
        header.classList.remove('header--dark');
    }
});

// Opacity styling for Home
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height; 
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// Arrow-up button
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    }
    else {
        arrowUp.style.opacity = 0;
    }
});

// Hamburger menu
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open'); 
});

// Menu closed when a menu selected
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open'); 
});