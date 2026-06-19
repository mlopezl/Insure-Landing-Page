const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  openMenu();
});

closeIcon.addEventListener("click", () => {
  closeMenu();
});

document.addEventListener("click", (e) => {
  if (
    !hamburgerIcon.contains(e.target) &&
    !closeIcon.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    closeMenu();
  }
});

function openMenu() {
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  mobileMenu.classList.remove("hidden");
}

function closeMenu() {
  closeIcon.classList.add("hidden");
  mobileMenu.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
}
