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

const form = document.querySelector('#form');
const body = document.querySelector('.body');
const modalError = document.querySelector('.form-modal--error');
const modalSuccess = document.querySelector('.form-modal--success');
const modalBg = document.querySelectorAll('.modal__bg');
const modalBtn = document.querySelectorAll('.form-modal__btn');
const submitBtn = document.querySelector('.form-submit__btn');

//inputs

const email = document.querySelector('#form-email');
const telephone = document.querySelector('#form-tel');
console.log(email.validateEmail);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(validateEmail(email.value) != true) {
    openErrorModal();
  }else {
    openSuccessModal();
    form.submit();
  }
})

function validateEmail(email) {
  const re = /^[a-z0-9_][a-z0-0\._-]*[a-z0-9_]*@([a-z0-9]+[a-z0-9_-]*[a-z0-9]+\.)+[a-z0-9]+$/i;
  return re.test(String(email).toLowerCase());
}

function openErrorModal() {
  modalError.classList.add('modal-open');
  body.classList.add('offScroll');
  closeModal()
};

function openSuccessModal() {
  modalSuccess.classList.add('modal-open');
  body.classList.add('offScroll');
  closeModal()
};

function closeModal() {
  modalBg.forEach(item => {
    item.addEventListener('click', (e) => {
      modalError.classList.remove('modal-open');
      modalSuccess.classList.remove('modal-open');
      body.classList.remove('offScroll');
    })
  })
  modalBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      modalError.classList.remove('modal-open');
      modalSuccess.classList.remove('modal-open');
      body.classList.remove('offScroll');
    })
  })
};

