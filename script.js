const openMenuButton = document.querySelector("#menu-open-button");
const closeMenuButton = document.querySelector("#menu-close-button");

openMenuButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

closeMenuButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

/**
 *  Another way to close menu
 */

// closeMenuButton.addEventListener('click',()=>{
//     openMenuButton.click()
// })

// Swiper JS
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters

  loop: true,
  spaceBetween: 20,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
