# Falcon.io menu
Recreation of falcon.io main menu that is more accessible and has smoother transitions.

## Performance features:
 - No JS used for transitions
 - Only hardware-accelerated CSS property used for transitions (transform and opacity)
 - Less DOM elements

## Accessibility features:
 - Fully accessible by keyboard
 - Proper :focus styling for all focusable elements
 - WCAG AAA compliant color contrast
 - `Skip to content` link
 - Semantic HTML (e.g. a button should really be a <button>, not a <p>)
 - Takes into consideration prefers-reduced-motion

## CSS architecture
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future updates
 - Dark mode support