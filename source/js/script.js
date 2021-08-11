"use strict"

//dropdown menu logick

const menuBtn = document.querySelector('.navigation__dropdown-btn');
const menuList = document.querySelector('.navigation__list');
closeMenu();

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (menuBtn.classList.contains('navigation__dropdown-btn--active') || menuList.classList.contains('navigation__list--active')) {
      closeMenu();
    } else openMenu();
  });

  function openMenu() {
    menuBtn.classList.add('navigation__dropdown-btn--active');
    menuList.classList.add('navigation__list--active');
  }

  function closeMenu() {
    menuBtn.classList.remove('navigation__dropdown-btn--active');
    menuList.classList.remove('navigation__list--active');
  }

