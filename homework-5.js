function showTemperature(city, temp) {
    console.log(`Сейчас в ${city} температура ${temp} градусов по Цельсию.`);
}

showTemperature("Махачкале", 20);

const LIGHT_SPEED = 300000000;

function lightspeedСomparison(speed) {
    if (LIGHT_SPEED < speed) {
        console.log("Сверхсветовая скорость!");
    } else if (LIGHT_SPEED > speed) {
        console.log("Субсветовая скорость!");
    } else {
        console.log("Равна скорости света!");
    }
}
lightspeedСomparison(300000000);

const communactionProduct = "Dell Z9100-ON";
const PRICE = 456_928;

function buyCommunicationProduct(budget) {
    if (budget >= PRICE) {
        console.log(`Поздравляем, вы преобрели ${communactionProduct}!`);
    } else {
        console.log(
            `К сожалению, у вас не достаточно средств вам не хватает ${PRICE - budget} рублей для покупки ${communactionProduct}.`
        );
    }
}
buyCommunicationProduct(500000);

const server = "HP ProLiant DL380 Gen10";
const sanStorage = "HP MSA 2070 SAN Storage";
const router = "Mikrotik CCR1036-8G-2S+EM";

function describe1cInfrastructure() {
    console.log(
        `Для работы 1С:Предприятия 8.3 нам необходим сервер ${server}, SAN Storage ${sanStorage} и маршрутизатор ${router}.`
    );
}
describe1cInfrastructure();
