const burger = document.querySelector('.burger');
const navbar  = document.querySelector('.nav-bar');

burger.addEventListener('click', changeMenu)

function changeMenu() {
   this.classList.toggle('is--close')
   navbar.classList.toggle('is--active')
}