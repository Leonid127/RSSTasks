const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-nav');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');

const toggleMenu = () => {
    menu.classList.toggle('open');
    lineOne.classList.toggle('open');
    lineTwo.classList.toggle('open');
    lineThree.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);


function closeMenu (event) {
    if (event.target.classList.contains('header-link')) {
        burger.classList.remove('open');
        menu.classList.remove('open');
        lineOne.classList.remove('open');
        lineTwo.classList.remove('open');
        lineThree.classList.remove('open');
    }
}

menu.addEventListener('click', closeMenu);

// Commit example