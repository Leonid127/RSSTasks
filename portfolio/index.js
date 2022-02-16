//************************************************* */ Burger menu

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

// *********************************************** Changing img

const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioImg = document.querySelectorAll('.portfolio-img');
const portfolioBtns = document.querySelector('.portfolio-buttons');

// portfolioImg.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);

function changeImage(event) {
    if(event.target.classList.contains('portfolio-btn')) {
        portfolioImg.forEach((img, index) => {
        img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`;
    });
}
}
portfolioBtns.addEventListener('click', changeImage);

//**************************************************** кэширование

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach((image) => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${image}/${i}.jpg`;
    }
  })
}

preloadImages();


const changeClassActive = (event) => {
    portfolioBtn.forEach((el) => {
        el.classList.remove('active');
    });
    event.target.classList.add('active')
}

portfolioBtns.addEventListener('click', changeClassActive);