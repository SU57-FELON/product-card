console.log("Hello, world!");

const firstCardrecolorButton = document.getElementById('recolor-the-first-card');
const firstCatalogCard = document.querySelector('.product-card');
const blueHashColor = '#0000FF';

firstCardrecolorButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = blueHashColor;
});

const greenHashColor = '#00FF00';

const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardsButton = document.getElementById('recolor-all-card-button');

recolorAllCardsButton.addEventListener('click', () => {
  catalogCards.forEach((card) => card.style.backgroundColor = greenHashColor);
});

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт гугл')
  
  if(answer) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google')
  }

}

const mainTitle = document.getElementById('main-title');

if(mainTitle) {
  mainTitle.addEventListener('mouseenter',() => {
    console.log('Содержимое загаловка:', mainTitle.textContent);
  });
} else {
  console.warn('Главный заголовок не найден')
}

const toggleButton = document.getElementById("toggle-btn");
const titleText = document.getElementById*("title-text");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("switch-color");
});

titleText.addEventListener('mouseover', () => {
  console.log(titleText.textContent)
  
}) 