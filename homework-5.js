function showTemperature(city, temp) {
  console.log(`Сейчас в ${city} , температура ${temp} градусов по Цельсию.`);
}

showTemperature("Махачкале", 20);

const LIGHT_SPEED = 299792458;

function lightspeedcomparison(speed) {
  if (LIGHT_SPEED < speed) {
    console.log('Сверх Световая скорость!');
} else if (LIGHT_SPEED < speed) {
  console.log('Субсветовая скорость!')
} else {
  console.log('Равна скорости света!')
  }
}

const communactionProduct =  ('Dell z9100-ON');
const price = 456928;

function buyCommunicationProduct(budget) {
  if (budget >= price) {
    console.log(`Поздавляем вы преобрели ${communactionProduct}!`);
  } else {
    console.log(`К сожалению, у вас не достаточно средств вам не хватает ${price - budget} рублей для покупки ${communactionProduct}.`);
  };
} 
buyCommunicationProduct(500000);


const server = 'HP ProLiant DL380 Gen10';
const sanStorage = 'HP MSA 2070 SAN Storage';
const route = 'Mikrotik CCR1036-8G-2S+EM';

function systeme1c() {
  console.log(`Для работы 1С:Предприятия 8.3 нам необходим сервер ${server}, SAN Storage ${sanStorage} и маршрутизатор ${route}.`);
}; 