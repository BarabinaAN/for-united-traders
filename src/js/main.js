const burger = document.querySelector('.nav__burger');
const navbar  = document.querySelector('.nav__bar');
const dropdown  = document.querySelector('.dropdown');

burger.addEventListener('click', changeMenu)
dropdown.addEventListener('click', changeDropdown)

function changeMenu() {
   this.classList.toggle('is--close')
   navbar.classList.toggle('is--active')
}

function changeDropdown() {
   this.classList.toggle('is--active')
}