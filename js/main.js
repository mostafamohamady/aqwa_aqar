/* ********** Stiky Navbar ********* */

var stickyNav = (function () {
  window.onscroll = function () {
    myFunction();
  };
  // Get the navbar
  var navbar = document.getElementById("navigation");
  body = document.getElementsByTagName("body")[0];
  // Get the offset position of the navbar
  var sticky =50;
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      // body.classList.add("p100");
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      // body.classList.remove("p100");
    }
  }
})();
stickyNav;

/* *************** */


var swiper = new Swiper('.swiper-container--index', {

  spaceBetween: 0,
  effect: 'fade',
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 900,
  autoplay: {
      delay: 6000,
      disableOnInteraction: false,
  },

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  }



});