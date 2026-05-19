import { Drink } from "./drink.js";
export class Lemonade extends Drink {
    constructor(name, size, price, temperature, flavor, isSparkling) {
        super(name, size, price, temperature);
        this.flavor = flavor;
        this.isSparkling = isSparkling;
    }

    getInfo() {
        return `${super.getInfo()}, Вкус: ${this.flavor}, Пенообразный: ${this.isSparkling ? 'Да' : 'Нет'}`;
    }
}