// main slider
var swiper = new Swiper(".swiper-container--index", {
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 700,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// // main slaider
