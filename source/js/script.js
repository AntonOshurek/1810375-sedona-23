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

//form modals

const body = document.querySelector('.body');
const modalError = document.querySelector('.form-modal--error');
const modalSuccess = document.querySelector('.form-modal--success');
const modalBg = document.querySelectorAll('.modal__bg');


const modalErrorBtn = document.querySelector('.form-modal__btn--error');
const modalSuccessBtn = document.querySelector('.form-modal__btn--success');
const submitBtn = document.querySelector('.form-submit__btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openErrorModal();
  closeModal();
})

function openErrorModal() {
  modalError.classList.add('modal-open');
  body.classList.add('offScroll');
};

function openSuccessModal() {
  modalSuccess.classList.add('modal-open');
  body.classList.add('offScroll');
};

function closeModal() {
  modalBg.forEach(item => {
    item.addEventListener('click', (e) => {
      modalError.classList.remove('modal-open');
      console.log(e);
    })
  })
  //body.classList.remove('offScroll');
};

