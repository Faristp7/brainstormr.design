const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener('click', function() {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    dropdownMenu.classList.toggle('hidden');
    dropdownMenu.classList.toggle('opacity-100');
    dropdownMenu.classList.toggle('scale-100');
  });