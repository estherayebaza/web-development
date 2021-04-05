class KioskCalc {
    constructor(fruit, quantity) {
        this.fruit = "orange";
        this.quantity = 2;
    }
    getTotalCost() {
        return `${this.quantity} ${this.fruit}$ for KES ${30*this.quantity}`;

    }
}
var kioskCalc = new KioskCalc("orange", 2)
console.log(kioskCalc.getTotalCost());