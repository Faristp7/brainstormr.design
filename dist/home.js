const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener("click", function () {
  const expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  dropdownMenu.classList.toggle("hidden");
  dropdownMenu.classList.toggle("opacity-100");
  dropdownMenu.classList.toggle("scale-100");
});

const starImg = document.getElementById("starImg");
const likeImg = document.getElementById("likeImg");
const shareImg = document.getElementById("shareImg");

// Add event listeners to each image
starImg.addEventListener("click", animateImage);
likeImg.addEventListener("click", animateImage);
shareImg.addEventListener("click", animateImage);

function animateImage(event) {
  // Toggle the animation class on the clicked image
  event.target.classList.toggle("animate-pulse");
}