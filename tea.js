import { Drink } from "./drink.js";
export class Tea extends Drink {
    constructor(name, size, price, temperature, teaType, strength) {
        super(name, size, price, temperature);
        this.teaType = teaType;
        this.strength = strength;
    }

    getInfo() {
        return `${super.getInfo()}, Тип чая: ${this.teaType}, Крепость: ${this.strength}`;
    }
}