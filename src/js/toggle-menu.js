function ToggleMenu() {
  const toggledClass = 'is-toggled';

  const Nav = document.querySelector('.js-nav');
  const ToggleMenu = document.querySelector('.js-toggle-menu');

  ToggleMenu.addEventListener('click', toggle);

  function toggle() {
    Nav.classList.toggle(toggledClass);
    ToggleMenu.classList.toggle(toggledClass);
  }
}

export default ToggleMenu;
