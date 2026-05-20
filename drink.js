export class Drink {
    #temperature;
    constructor (name, size, price, temperature) {
      if (new.target === Drink) {
        throw new Error("Невозможно создать экземпляр абстрактного класса Drink");
      }
      this.name = name;
      this.size = size;
      this.price = price;
      this.#temperature = temperature;
    };

    getTemperature() {
      return this.#temperature;
    };
    
    setTemperature(value) {
      this.#temperature = value;
    };

    getInfo() {
      return `Напиток: ${this.name}, Размер: ${this.size}, Цена: ${this.price}, Температура: ${this.#temperature}`;
    }

    #makeDrink() {
      console.log(`Приготовление напитка ${this.name}...`);
    }
    
    serveDrink() {
      this.#makeDrink();
      this.setTemperature(20);
      console.log(`Ваш ${this.name} готов! Приятного аппетита!`);
      console.log(`Температура напитка: ${this.getTemperature()} градусов.`);
    }



  };