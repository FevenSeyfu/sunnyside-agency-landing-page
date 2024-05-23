import "./style.css";

const hamburgerBtn = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".navBar");
const mobileMenu = document.querySelector(".MenuModal");
let isMenuOpen = false;

const HandleOpenMenu = () => {
  // opening menu
  if (!isMenuOpen) {
    menu.classList.remove("hidden");
    mobileMenu.classList.add("active");
    hamburgerBtn.classList.add("inactive");
    isMenuOpen = true;
  }
};
const handleCloseMenu = () => {
  menu.classList.add("hidden");
  mobileMenu.classList.remove("active");
  hamburgerBtn.classList.remove("inactive");
  isMenuOpen = false;
};
// hamburgerBtn.addEventListener("click", HandleOpenMenu);

document.addEventListener("click", (e) => {
  let clickInside = mobileMenu && mobileMenu.contains(e.target);
  if (!isMenuOpen) {
    hamburgerBtn.contains(e.target) && HandleOpenMenu();
  } else {
    // if clicked outside of mobile menu close menu modal
    if (!clickInside) {
      handleCloseMenu();
    }
  }
});
