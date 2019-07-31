const barIcon = document.querySelector('.main-side__bar-icon');
const navClass = document.querySelector('.menu');
const globalCircleList = document.querySelectorAll('[data-id]');

//Bar
barIcon.addEventListener('click', () => {
    navClass.classList.toggle('menu--active')
});

//Global 

Array.from(globalCircleList).forEach((element) => {
    element.addEventListener('click', () => {
            element.classList.toggle('global__circle--active')
        })
})