'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__contacts-burger');
  const contacts = document.querySelector('.contacts');

  menuBtn.addEventListener('click', () => {
    contacts.classList.toggle('active');
  });
});