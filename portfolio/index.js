const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }


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

//*********************************************** changing active class */
const changeClassActive = (event) => {
    portfolioBtn.forEach((el) => {
        el.classList.remove('active');
    });
    event.target.classList.add('active')
}

portfolioBtns.addEventListener('click', changeClassActive);

// ********************************************** translate

const switchLang = document.querySelector('.switch-lang');
const elForTranslate = document.querySelectorAll('[data-i18]');

const getTranslate = (event) => {
    if(event.target.classList.contains('lang-item')) {
        const lang = event.target.textContent;

        elForTranslate.forEach((el) => {
            el.textContent = i18Obj[lang][el.dataset.i18];
        })
    }
}


switchLang.addEventListener('click', getTranslate);

//****************************************** change theme */

const arrTheme = ['price-item-title', 'price-text', 'body', 'skills', 'skills-items', 'skills-title', 'portfolio', 'portfolio-title', 'video-player', 'video-player-title', 'price', 'price-title', 'camera-title', 'camera-subtitle', 'video-title', 'video-subtitle', 'image-title', 'image-subtitle', 'mic-title', 'mic-subtitle'];
const themeBtn = document.querySelector('.theme');

const toggleTheme = () => {
    const item = [...document.querySelectorAll(`.${arrTheme.join(',.')}`)];
    
    item.forEach((el) => 
    el.classList.toggle('light-theme'));
    

}
themeBtn.addEventListener('click', toggleTheme);

const arrTheme2 = ['skills-line', 'portfolio-line', 'video-player-line', 'price-line'];

const toggleTheme2 = () => {
    const item = [...document.querySelectorAll(`.${arrTheme2.join(',.')}`)];
    
    item.forEach((el) => 
    el.classList.toggle('light-theme-2'));
    

}
themeBtn.addEventListener('click', toggleTheme2);

const arrTheme3 = document.querySelectorAll('.portfolio-btn');

const toggleTheme3 = () => {
    
    arrTheme3.forEach((el) => {
        el.classList.toggle('light-theme-3'); 
    });
      
}

themeBtn.addEventListener('click', toggleTheme3);