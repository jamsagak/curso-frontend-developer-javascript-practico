const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDektopMenu)


function toggleDektopMenu () {
desktopMenu.classList.toggle('inactive');

}
