import { Drink } from "./drink.js";
export class Coffee extends Drink {
    constructor(name, size, price, temperature, type, milktype) {
        super(name, size, price, temperature);
        this.type = type;
        this.milktype = milktype;
    } 

    getInfo() {
    return `${super.getInfo()}, Тип кофе: ${this.type}, Тип молока: ${this.milktype}`;
  }
};
