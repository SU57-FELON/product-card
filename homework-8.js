import { products } from "./products.js";

const productTemplate = document.querySelector('#product-card-template');
function renderProductCards(dataArray) {
  dataArray.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.product-card__img').src = `images/${product.image}.png`;
    productClone.querySelector('.product-card__for-skin').textContent = product.skinType;
    productClone.querySelector('.product-card__title').textContent = product.title;
    productClone.querySelector('.product-card__description').textContent = product.description;
    productClone.querySelector('.product-card__price').innerHTML = ` ${product.price} &#8381;`;
    document.querySelector('.product-card-wrapper').appendChild(productClone);
  });
}



const productDescriptions = products.reduce((acc, product) => {
    acc.push({ [product.title]: product.description });
    return acc;
}, []);

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
renderProductCards(products.slice(0, count));