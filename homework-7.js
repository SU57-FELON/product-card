// Homework-7.js
import {socialComments} from "./comments.js";

// --- Уровень 1 ---

// 2. Массив чисел от 1 до 10 и фильтрация от 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(number => number >= 5);
console.log("Отфильтрованные числа:", filteredNumbers);

// 3. Массив для сборки своей Rossa. 
const rossaBuildComponents = [
  "judd GV5/V10 Engine",
  "Audi (S-tronic) Transmission",
  "AP Racing Brakes",
  "Ohlins Suspension",
  "OZ Racing Wheels",
  "Pirelli Tires",
]; 

// Проверка наличия определенной сущности (например: Двигателя)
const hasEngine = rossaBuildComponents.includes("judd GV5/V10 Engine");
console.log("Установлен ли двигатель ? judd GV5/V10 Engine:", hasEngine);

// 4. Функция для получения перевернутого массива
function getReversedArray(arr) {
  return [...arr].reverse();
}
console.log("Перевернутый массив компонентов Rossa:", getReversedArray(rossaBuildComponents));
console.log("Исходный массив чисел после реверса:", getReversedArray(numbers)); 

// --- Уровень 2 ---

// 7. Почты .com 
const filtredComments = socialComments.filter(comment => comment.email.endsWith(".com"));

// 8. Post Id 
const usersWithEditedPosts = socialComments.map(comment => {
  return {...comment, postId: comment.id <= 5 ? 2 : 1};
});

console.log("Пользователи с отредактированными постами:", usersWithEditedPosts );

// 9. Оставляем в объектах  только id и name
const userProdiles = socialComments.map(comment => ({id: comment.id, name: comment.name }));
console.log("Профили пользователей:", userProdiles);

// 10. Проверка длины комментария и добавление свойства isInvalid
const processedMessages = socialComments.map(comment => {
  return {...comment, isInvalid: comment.body.length > 180};
});

console.log("Обработанные сообщения:", processedMessages);

// --- Уровень 3 ---

const emailsByReduce = socialComments.reduce((acc, comment) => {
  return [...acc, comment.email];
}, []);

console.log("Массив email-ов:", emailsByReduce);

const emailsByMap = socialComments.map(comment => ({email: comment.email}));
console.log("Массив объектов с email-ами:", emailsByMap);