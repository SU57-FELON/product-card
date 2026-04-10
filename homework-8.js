import { products } from "./products.js";

const createCard = (product) => {
  const compositionHtml = product.composition
    .map((item) => `<li class="product-card__item">${item}</li>`)
    .join('');
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}"
          class="product-card__img">
        <p class="product-card__for-skin">${product.skinType}</p>
        <h2 class="product-card__title">${product.title}</h2>
        <p class="product-card__description">${product.description}</p>
        <span class="product-card__text">Состав:</span>
        <ul class="product-card__composition">${compositionHtml}</ul>
        <div class="product-card__price-wrapper">
          <span class="product-card__price-text">Цена</span>
          <span class="product-card__price">${product.price.toLocaleString()} &#8381</span>
        </div>
      </div>
    `
} 

const renderCards = (products)  => {
  const wrapper = document.querySelector('.product-card-wrapper');
  wrapper.innerHTML = products.map((product) => createCard(product)).join('');
};

const productDescriptions = products.reduce((acc, product) => {
    acc[product.title] = product.description;
    return acc;
}, {});

console.log(productDescriptions);

const getCardsCount = () => {
    const answer = parseInt(prompt("Сколько карточек отобразить? От 1 до 5"));
    if (answer >= 1 && answer <= 5) {
        return answer;
    } else {
        return 5;
    } 
};

const count = getCardsCount();
renderCards(products.slice(0, count));