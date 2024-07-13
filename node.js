let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});

var swiper1 = new Swiper('.home', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  var swiper2 = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      568: {
        slidesPerView: 3,
      },
      786: {
        slidesPerView: 4,
      }
    },
  });   