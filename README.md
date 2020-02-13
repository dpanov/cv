# Falcon.io menu
Recreation of falcon.io main menu that is more accessible and has smoother transitions.

## Performance features:
 - No JS used for transitions
 - Mosttly hardware-accelerated CSS property are used for transitions (transform and opacity). Exception are:
    - Width of the active state element. It can be done with transform: scaleX(), but it will cause unnecessary code complications.
    - Button/link colors
 - Less DOM elements

## Accessibility features:
 - Fully accessible by keyboard
 - Fully accessible by screen readers
 - Proper :focus styling for all focusable elements
 - WCAG AAA compliant color contrast
 - `Skip to content` link
 - Semantic HTML (e.g. a button should really be a <button>, not a <p>)
 - Takes into consideration `prefers-reduced-motion`

## CSS stuff
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future changes
 - Dark mode support
 - Button text is properly centered vertically

## Things to consider
 - dropdown menu slide animation is a bit different - in order to use only hardware-accelerated CSS properties the sliding logic of the dropdown menu is a bit different than the original one.
 - Some colors are different due to WCAG compliance and also due to changing opacity level for some of them, instead of changing the background-color. Of course, both changes must be coordinated with the designer or the product owner in order to be in line with the brand identity.
