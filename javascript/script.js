const barIcon = document.querySelector('.main-side__bar-icon');
const navClass = document.querySelector('.menu');
const globalCircleList = document.querySelectorAll('[data-id]');
const globalCounterActual = document.querySelector('.counter__actual');
const globalCounterMax = document.querySelector('.counter__max');
const globalNumber = document.querySelector('.single-photo__title--counter')
const globalLeftArrow = document.querySelector('.counter__arrow--left');
const globalRightArrow = document.querySelector('.counter__arrow--right');
const serviceContainer = document.querySelector('.servies__container');
const servicesSingleContainer = document.querySelectorAll('.container__single');
const servicesCorners = document.querySelectorAll('.container_corners-images');
const newslatterInputs = document.querySelectorAll('.newslatter__input');
const logosList = document.querySelectorAll('.logos__single-logo');


//Bar
barIcon.addEventListener('click', () => {
    navClass.classList.toggle('menu--active')
});

//Global 
let counter = 0;

globalCounterMax.textContent = `0${globalCircleList.length-1}`;

[...globalCircleList].forEach((element, index) => {
    element.addEventListener('click', () => {
        [...globalCircleList].forEach((element) => element.classList.remove('global__circle--active'));
        element.classList.add('global__circle--active');
        globalNumber.textContent = index;
        globalCounterActual.textContent = `0${index}`
        counter = index
    })
});

globalLeftArrow.addEventListener('click', () => {
    counter--;
    console.log(counter)
    if (counter < 0)
        counter = 4;

    [...globalCircleList].forEach((element) => element.classList.remove('global__circle--active'));
    globalCircleList[counter].classList.add('global__circle--active');
    globalNumber.textContent = counter;
    globalCounterActual.textContent = `0${counter}`
    
})

globalRightArrow.addEventListener('click', () => {
    counter++;
    console.log(counter)

    if (counter > 4)
        counter = 0;

    [...globalCircleList].forEach((element) => element.classList.remove('global__circle--active'));
    globalCircleList[counter].classList.add('global__circle--active');
    globalNumber.textContent = counter;
    globalCounterActual.textContent = `0${counter}`;
    
});

//Services

serviceContainer.addEventListener('click',(event) => {
    if(event.target.dataset.services){
        [...servicesSingleContainer].forEach(element => element.classList.remove('container__single--active'));
        [...servicesCorners].forEach(element => element.classList.remove('container_corners-images--active'));
        event.target.classList.add('container__single--active');
        [...document.querySelectorAll(`[data-services = "${event.target.dataset.services}"] .container_corners-images`)].forEach(element => {
            element.classList.add('container_corners-images--active');
        })
    }
});

//Newslatter

[...newslatterInputs].forEach(element => {
    element.addEventListener('click', () => {
        [...newslatterInputs].forEach(element => element.classList.remove('newslatter__input--active'));
        element.classList.add('newslatter__input--active')
    })
});

//Logos

[...logosList].forEach(element => {
    element.addEventListener('click',() => {
        [...logosList].forEach(element => element.classList.remove('logos__single-logo--active'));
        element.classList.add('logos__single-logo--active');
    })
})
    
