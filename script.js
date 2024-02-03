var swiperContainer = document.querySelector(".mySwiper");

if (swiperContainer) {
  var swiper = new Swiper(swiperContainer, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
} 

var swiperContainer2 = document.querySelector(".mySwiper2");

if (swiperContainer2) {
  var swiper2 = new Swiper(swiperContainer2, {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
} 


// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("touchstart", (event) => {
  const isHamburger = event.target.closest(".hamburger");
  const isNavMenu = event.target.closest(".mobile-menu");

  if (!isHamburger && !isNavMenu) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
document.addEventListener("scroll", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
