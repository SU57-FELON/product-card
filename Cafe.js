export class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    };
    
    getInfo() { 
      return `Кафе: ${this.name}, Расположение: ${this.location}`;
    };
    
    orderDrink(drink) {
      console.log(`Вы заказали: ${drink.getInfo()}`);
      drink.serveDrink();
    };
  }; 