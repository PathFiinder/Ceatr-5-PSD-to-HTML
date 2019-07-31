const barIcon = document.querySelector('.main-side__bar-icon');
const navClass = document.querySelector('.menu');

//Bar
barIcon.addEventListener('click',() => {
    navClass.classList.toggle('menu--active')
});