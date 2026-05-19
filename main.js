import { Cafe } from './Cafe.js'
import { Coffee } from './Coffee.js'
import { Tea } from './tea.js'
import { Lemonade } from './lemonade.js'
const coffe = new Coffee('Эспрессо', 'маленький', 100, 'горячий', 'арабика', 'без молока');
const tea = new Tea('Зеленый чай', 'средний', 80, 'горячий', 'зеленый', 'средняя');
const lemonade = new Lemonade('Лимонад', 'большой', 120, 'холодный', 'лимон', true);
const cafe = new Cafe('Кафе "Созидай"', 'улица Хаппалаева, 36');

console.log(coffe.getInfo());
cafe.orderDrink(coffe);