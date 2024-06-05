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
  menu_list = document.querySelector('#menu-list');
  menu = document.querySelector('#menu');
  burger.addEventListener('click', function() {
    burger.classList.toggle('close')
    menu_list.classList.toggle('menu-list__open')
    menu.classList.toggle('menu_bg')
  })