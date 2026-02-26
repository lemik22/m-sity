const swiper = new Swiper('.gallery__slider', {
  wrapperClass: 'gallery__slider-wrapper',
  slideClass: 'gallery__slide',
  
  slidesPerView: 3,
  spaceBetween: 20,
  autoHeight: false,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});