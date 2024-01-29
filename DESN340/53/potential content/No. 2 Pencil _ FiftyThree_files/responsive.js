/**
 * Toggle on/off the responsive nav menu on click.
 *
 * Menu is shown by default when js is disabled.
 */
var navToggle   = document.getElementById('nav-toggle-button'),
    navMenu     = document.getElementById('nav-toggle-menu');

if (navToggle && navMenu) {
    navToggle.onclick = function toggleMenu() {
        navMenu.classList.toggle('expanded');
    };
}
