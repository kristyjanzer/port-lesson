'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // Burger Menu
  const menuBtn = document.querySelector('.header__contacts-burger');
  const contacts = document.querySelector('.contacts');

  menuBtn.addEventListener('click', () => {
    contacts.classList.toggle('active');
  });

  //Swiper SLider
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.portfolio__arrow_right',
      prevEl: '.portfolio__arrow_left',
      disabledClass: 'portfolio__arrow_disable'
    },
    breakpoints: {
      // when window width is >= 480px
      480: {
        grid: {
          fill: 'row',
          rows: 2
        }
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        grid: {
          fill: 'row',
          rows: 2
        }
      }
    }
  });


  //Modal
  const orderBtn = document.querySelector('.present__order-btn');
  const overlayModal = document.querySelector('.page__overlay_modal');
  const closeModal = document.querySelector('.modal__close');
  const pageOverlay = document.querySelector('.page__overlay');

  orderBtn.addEventListener('click', () => {
    overlayModal.classList.add('open');
  });

  function closeModalFunc(item) {
    item.addEventListener('click', () => {
      overlayModal.classList.remove('open');
    });
  }

  closeModalFunc(closeModal);
  closeModalFunc(pageOverlay);


});