const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  burger = document.querySelector('#burger');
  menu = document.querySelector('#menu');
  burger.addEventListener('click', function() {
    burger.classList.toggle('close')
    menu.classList.toggle('menu-list__open')
  })