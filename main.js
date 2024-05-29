import "./style.css";

const hamburgerBtn = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".navBar");
const menuModal = document.querySelector(".MenuModal");
let isMenuOpen = false;

const HandleOpenMenu = () => {
  // opening menu
  if (!isMenuOpen) {
    menu.classList.remove("hidden");
    menuModal.classList.add("active");
    hamburgerBtn.classList.add("inactive");
    isMenuOpen = true;
  }
};
const handleCloseMenu = () => {
  menu.classList.add("hidden");
  menuModal.classList.remove("active");
  hamburgerBtn.classList.remove("inactive");
  isMenuOpen = false;
};

const handleResize = () =>{
  if (window.innerWidth <= 768) {
    hamburgerBtn.classList.remove('hidden');
    menuModal.classList.add('hidden');
  } else {
    hamburgerBtn.classList.add('hidden');
    menuModal.classList.remove('hidden');
  }
}
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);

document.addEventListener("click", (e) => {
  let clickInside = menuModal && menuModal.contains(e.target);
  if (!isMenuOpen) {
    hamburgerBtn.contains(e.target) && HandleOpenMenu();
  } else {
    // if clicked outside of mobile menu close menu modal
    if (!clickInside) {
      handleCloseMenu();
    }
  }
});


