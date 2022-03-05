const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const hoverItem = document.querySelector('[data-brand]');
const dropdown = document.querySelector('[data-dropdown]');
const hiddenElement = document.querySelector('[data-hidden]');
const searchButton = document.querySelector('[data-search-button]');
const input = document.querySelector('[data-input]');

searchButton.addEventListener('click', () => {
  input.classList.toggle('hidden');
  input.classList.toggle('flex');
});

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

hoverItem.addEventListener('mouseover', () => {
  dropdown.classList.remove('hidden');
  dropdown.classList.add('grid');
});

dropdown.addEventListener('mouseover', () => {
  dropdown.classList.remove('hidden');
  dropdown.classList.add('grid');
});

hoverItem.addEventListener('mouseout', () => {
  dropdown.classList.add('hidden');
  dropdown.classList.remove('grid');
});

dropdown.addEventListener('mouseout', () => {
  dropdown.classList.add('hidden');
  dropdown.classList.remove('grid');
});

hiddenElement.addEventListener('mouseover', () => {
  dropdown.classList.remove('hidden');
  dropdown.classList.add('grid');
});

hiddenElement.addEventListener('mouseout', () => {
  dropdown.classList.add('hidden');
  dropdown.classList.remove('grid');
});
