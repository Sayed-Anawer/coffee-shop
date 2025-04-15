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

