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
 - Semantic and valid HTML (e.g. a button should really be a `<button>`, not a `<p>`, also no `<div>` children in the `<ul>` element)
 - Takes into consideration `prefers-reduced-motion`
 - Buttons are bigger to ensure easier clicking, especially on touch devices
 - Added some whitespace between nav links in the dropdown - it was getting cluttered on tablet sizes (834px screen width)

## CSS stuff
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future changes
 - Dark mode support
 - Button text is properly centered vertically
 - Hamburger icon don't overlap with menu on some screen sizes

## Things to consider
 - dropdown menu slide animation is a bit different - in order to use only hardware-accelerated CSS properties the sliding logic of the dropdown menu is a bit different than the original one.
 - Some colors are different due to WCAG compliance and also due to changing opacity level for some of them, instead of changing the background-color. Of course, both changes must be coordinated with the designer or the product owner in order to be in line with the brand identity.

 - Should we use <h#> for Publish? Should we use a hidden dot in order to have a pause after "Publish"?

```html
<div class="nav-card__content">
  <strong class="nav-card__title">Publish</strong>
  <p class="nav-card__text">Manage all your content in one calendar.</p>
</div>
```

Using ul's and li's in a navigation is a good idea, because they provide a count and position within the list.

## To do
- Add `aria-current="page"` to the active page in the menu
- Think over the CSS architecture
- Refactor _nav.scss, especially the transitions logic
- Refactor menu.js
- Make screenshots of all the ways the menu is currently broken
- Check if screen readers read pseudo elements content
- Event listener on screen resize
