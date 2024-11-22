$(document).ready(function(){//start

  var gnbBg = new Swiper(".gnb_bg", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });



  AOS.init();



//fin
});