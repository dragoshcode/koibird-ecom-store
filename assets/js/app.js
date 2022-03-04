const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
