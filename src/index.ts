import { Person } from "./bai_01";
import { Student } from "./bai_02";
import { Car } from "./bai_03";
import { Rectangle } from "./bai_04";
import { BankAccount } from "./bai_05";
import { getProductsByMinPrice, Product } from "./bai_08";

const person = new Person('John', 22);
console.log(person.toString());

const student = new Student('John', 22, 9.5);
console.log(student.toString());

const car = new Car("Toyota", "Corolla", 2021);
console.log(car.toString());

const rectangle = new Rectangle(10, 20);
console.log(`area: ${rectangle.area()}, perimeter: ${rectangle.perimeter()}`);


const bankAccount = new BankAccount(0);
bankAccount.deposit(5000);
bankAccount.withdraw(1000);
console.log(`balance: ${bankAccount.balance}`);


const products = [
    new Product('Car', 20),
    new Product('Bike', 100),
    new Product('Chocolate', 400),
    new Product('Pikachu', 200),
]
console.log(getProductsByMinPrice(products, 100));


