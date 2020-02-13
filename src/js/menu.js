function menu() {
	const toggledClass = 'is-toggled';

	const Nav = document.querySelector('.js-nav');
	const Header = document.querySelector('.js-header');
	const NavTogglers = Nav.querySelectorAll('.js-nav-toggler');
	const Body = document.querySelector('body');

	initMenu();

	function toggleMenu(clickedButton) {
		clickedButton.addEventListener('click', () => {

			// Toggle dropdown
			if (clickedButton.classList.contains(toggledClass)) {
				NavTogglers.forEach(button => button.classList.remove(toggledClass));
			} else {
				NavTogglers.forEach(button => button.classList.remove(toggledClass));
				clickedButton.classList.toggle(toggledClass);
			}

			// Toggle black overlay behind menu
			if (Nav.querySelectorAll('.' + toggledClass).length) {
				Body.classList.add(toggledClass);
			} else {
				Body.classList.remove(toggledClass);
			}
		})
	}

	function initMenu() {
		// Ensure clicks in the header area don't close the nav dropdown
		Header.addEventListener('click', (e) => {
			e.stopPropagation();
		})

		// Close the nav dropdown if you click outside of the header
		Body.addEventListener('click', (e) => {
			if (Body.classList.contains(toggledClass)) {
				Body.classList.remove(toggledClass);
				NavTogglers.forEach(button => button.classList.remove(toggledClass));
			}
		})
		
		// Add toggle event listeners for every button in the menu
		NavTogglers.forEach((button) => {
			toggleMenu(button);
		});
	}
}

export default menu;
