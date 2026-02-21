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
  const answer = confirm('Вы действительно хотите перейти на сайт гугл');
  
  if(answer) {
    window.open('https://google.com');
  } else {
    c