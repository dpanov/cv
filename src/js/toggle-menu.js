function ToggleMenu() {
  const toggledClass = 'is-nav-toggled';

  const Nav = document.querySelector('.js-nav');
  const ToggleMenu = document.querySelector('.js-toggle-menu');
  const Body = document.querySelector('body');
  const NavTogglers = document.querySelectorAll('.js-nav-toggler');

  ToggleMenu.addEventListener('click', toggle);

  function toggle() {
    Nav.classList.toggle(toggledClass);
    ToggleMenu.classList.toggle(toggledClass);
    Body.classList.toggle(toggledClass);
    Body.classList.remove('is-dropdown-toggled');

    NavTogglers.forEach((button) => {
      button.classList.remove('is-dropdown-toggled');
    })
  }
}

export default ToggleMenu;
