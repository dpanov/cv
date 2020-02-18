function menu() {
	const toggledClass = 'is-toggled';

	const Nav = document.querySelector('.js-nav');
	const Header = document.querySelector('.js-header');
	const Body = document.querySelector('body');
	
	const NavTogglers = Nav.querySelectorAll('.js-nav-toggler');
	const NavActiveState = document.querySelector('.js-nav-active-state');

	initMenu();

	function toggleMenu(clickedButton) {
		clickedButton.addEventListener('click', () => {
			setActiveState(clickedButton);

			// Toggle dropdown
			if (clickedButton.classList.contains(toggledClass)) {
				// If you click the active button
				NavTogglers.forEach(button => button.classList.remove(toggledClass));
				NavActiveState.style.width = 0;
			} else {
				// If you click any of the buttons, but not the active one
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

	// Set active state position
	function setActiveState(clickedElement) {
		const offsetLeft = clickedElement.getBoundingClientRect().left;
		const width = clickedElement.getBoundingClientRect().width;

		NavActiveState.style.transform = 'translateX(' + offsetLeft + 'px)';
		NavActiveState.style.width = width + 'px';
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
				NavActiveState.style.width = 0;
			}
		})
		
		// Add toggle event listeners for every button in the menu
		NavTogglers.forEach((button) => {
			toggleMenu(button);
		});

		// Init active state
		setTimeout(() => {
			NavActiveState.style.transform = 'translateX(' + NavTogglers.item(0).getBoundingClientRect().left + 'px)';
		}, 500)
	}
}

export default menu;
