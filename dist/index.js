"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai_01_1 = require("./bai_01");
const bai_02_1 = require("./bai_02");
const bai_03_1 = require("./bai_03");
const bai_04_1 = require("./bai_04");
const bai_05_1 = require("./bai_05");
const bai_08_1 = require("./bai_08");
const person = new bai_01_1.Person('John', 22);
console.log(person.toString());
const student = new bai_02_1.Student('John', 22, 9.5);
console.log(student.toString());
const car = new bai_03_1.Car("Toyota", "Corolla", 2021);
console.log(car.toString());
const rectangle = new bai_04_1.Rectangle(10, 20);
console.log(`area: ${rectangle.area()}, perimeter: ${rectangle.perimeter()}`);
const bankAccount = new bai_05_1.BankAccount(0);
bankAccount.deposit(5000);
bankAccount.withdraw(1000);
console.log(`balance: ${bankAccount.balance}`);
const products = [
    new bai_08_1.Product('Car', 20),
    new bai_08_1.Product('Bike', 100),
    new bai_08_1.Product('Chocolate', 400),
    new bai_08_1.Product('Pikachu', 200),
];
console.log((0, bai_08_1.getProductsByMinPrice)(products, 100));
