const navLinks = document.querySelector('.nav-links')
const menuIcon = document.querySelector('.menu-icon')
const closeMenu = document.querySelector('.close-menu-icon')

menuIcon.addEventListener('click', openMenuFunction)

function openMenuFunction() {
     navLinks.classList.add('openMenu')
}

closeMenu.addEventListener('click', closeMenuFunction)

function closeMenuFunction() {
     navLinks.classList.remove('openMenu')
}

