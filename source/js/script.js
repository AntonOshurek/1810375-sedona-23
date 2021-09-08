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

//hidden map image
const mapLink = document.querySelector('.map__link');
mapLink.classList.add('map__link--hidden');

//form modals
const form = document.querySelector('#form');
const body = document.querySelector('.body');
const modalError = document.querySelector('.form-modal--error');
const modalSuccess = document.querySelector('.form-modal--success');
const modalBg = document.querySelectorAll('.form-modal__bg');
const modalBtn = document.querySelectorAll('.form-modal__btn');
const submitBtn = document.querySelector('.form-submit__btn');

//inputs
const email = document.querySelector('#form-email');
const telephone = document.querySelector('#form-tel');
const firstName = document.querySelector('#name');

const formData = [];

submitBtn.addEventListener('click', (e) => {
  if(!validateEmail(email.value) || !validateTel(telephone.value) || !validateName(firstName.value)) {
    e.preventDefault();
    openErrorModal();
  }else {
    e.preventDefault();

    let newUserData = {
      email: email.value,
      tel: telephone.value,
      name: firstName.value
    };
    formData.push(newUserData);
    openSuccessModal();
  }
})

function validateEmail(email) {
  const re = /^[a-z0-9_][a-z0-0\._-]*[a-z0-9_]*@([a-z0-9]+[a-z0-9_-]*[a-z0-9]+\.)+[a-z0-9]+$/i;
  return re.test(String(email).toLowerCase());
}

function validateTel(tel) {
  const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(String(tel));
}

function validateName(name) {
  const re = /^[a-zA-Z\-]+$/;
  return re.test(String(name).toLowerCase());
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
