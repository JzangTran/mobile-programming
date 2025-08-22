"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai_01_1 = require("./bai_01");
const bai_02_1 = require("./bai_02");
const bai_03_1 = require("./bai_03");
const bai_04_1 = require("./bai_04");
const bai_05_1 = require("./bai_05");
const bai_08_1 = require("./bai_08");
const bai_10_1 = require("./bai_10");
const bai_11_1 = require("./bai_11");
const bai_19_1 = require("./bai_19");
const bai_12_1 = require("./bai_12");
const bai_13_1 = require("./bai_13");
const Developer_1 = require("./bai_14/Developer");
const Manager_1 = require("./bai_14/Manager");
const bai_15_1 = require("./bai_15");
const bai_16_1 = require("./bai_16");
const bai_17_1 = require("./bai_17");
const bai_18_1 = require("./bai_18");
const bai_19_2 = require("./bai_19");
const bai_28_1 = require("./bai_28");
const bai_20_1 = require("./bai_20");
const bai_21_1 = require("./bai_21");
const bai_22_1 = require("./bai_22");
const bai_23_1 = require("./bai_23");
const bai_24_1 = require("./bai_24");
const bai_25_1 = require("./bai_25");
const bai_26_1 = require("./bai_26");
const bai_27_1 = require("./bai_27");
const bai_29_1 = require("./bai_29");
const bai_30_1 = require("./bai_30");
const displayQA = (title, content) => {
    console.log(`\n======== ${title} ========`);
    if (typeof content === 'function') {
        content();
    }
    else {
        console.log(content);
    }
};
displayQA('Bài ', () => { });
displayQA('Bài 1', () => {
    const person = new bai_01_1.Person('John', 22);
    console.log(person.toString());
});
displayQA('Bài 2', () => {
    const student = new bai_02_1.Student('John', 22, 9.5);
    console.log(student.toString());
});
displayQA('Bài 3', () => {
    const car = new bai_03_1.Car("Toyota", "Corolla", 2021);
    console.log(car.toString());
});
displayQA('Bài 4', () => {
    const rectangle = new bai_04_1.Rectangle(10, 20);
    console.log(`area: ${rectangle.area()}, perimeter: ${rectangle.perimeter()}`);
});
displayQA('Bài 5', () => {
    const bankAccount = new bai_05_1.BankAccount(0);
    bankAccount.deposit(5000);
    bankAccount.withdraw(1000);
    console.log(`balance: ${bankAccount.balance}`);
});
displayQA('Bài 7', () => {
    const products = [
        new bai_08_1.Product('Car', 20),
        new bai_08_1.Product('Bike', 100),
        new bai_08_1.Product('Chocolate', 400),
        new bai_08_1.Product('Pikachu', 200),
    ];
    console.log((0, bai_08_1.getProductsByMinPrice)(products, 100));
});
displayQA('Bài 8', () => {
    const dog = new bai_11_1.Dog('Cậu Vàng');
    console.log(dog.bark());
    const cat = new bai_11_1.Cat('Tom');
    console.log(cat.meow());
});
displayQA('Bài 10', () => {
    const account = new bai_10_1.Account('123', 'admin', '123');
    console.log(account);
});
displayQA('Bài 11', () => {
    const dog11 = new bai_11_1.Dog('Kiki');
    const cat11 = new bai_11_1.Cat('Tom');
    dog11.bark();
    cat11.meow();
});
displayQA('Bài 12', () => {
    const bird = new bai_12_1.Bird('Guru');
    const fish = new bai_12_1.Fish('Nemo');
    bird.fly();
    fish.swim();
});
displayQA('Bài 13', () => {
    const square = new bai_13_1.Square(4);
    const circle = new bai_13_1.Circle(4);
    console.log(`Square: ${square.area()}`);
    console.log(`Circle: ${circle.area()}`);
});
displayQA('Bài 14', () => {
    const manager = new Manager_1.Manager('Nam');
    const dev = new Developer_1.Developer('Quan');
    manager.manage();
    dev.code();
});
displayQA('Bài 15', () => {
    const lib = new bai_15_1.Library([], []);
    console.log(`Before: ${lib.books}`);
    lib.addBook('Tom', 'Me', 2000);
    console.log(`After: ${lib.books}`);
});
displayQA('Bài 16', () => {
    const box1 = new bai_16_1.Box(20);
    console.log(`value: ${box1.getValue()}, type: ${typeof box1.getValue()}`);
    const box2 = new bai_16_1.Box('Hello');
    console.log(`value: ${box2.getValue()}, type: ${typeof box2.getValue()}`);
});
displayQA('Bài 17', () => {
    bai_17_1.Logger.getInstance().log('Log 1 ................!');
});
displayQA('Bài 18', () => {
    const a = 4, b = 2;
    console.log(`Tổng: ${bai_18_1.MathUtil.add(a, b)}`);
    console.log(`Hiệu: ${bai_18_1.MathUtil.substract(a, b)}`);
    console.log(`Tích: ${bai_18_1.MathUtil.multiply(a, b)}`);
    console.log(`Thương: ${bai_18_1.MathUtil.divide(a, b)}`);
});
displayQA('Bài 19', () => {
    const animals = [
        new bai_19_1.Dog("Buddy"),
        new bai_19_1.Cat("Kitty"),
        new bai_19_2.Animal("GenericAnimal")
    ];
    for (const animal of animals) {
        animal.sound();
    }
});
displayQA('Bài 20', () => {
    const car = new bai_20_1.Car('B', 'B-2', 2000);
    const bike = new bai_20_1.Bike('A', 'A-2', 2020);
    car.run();
    bike.run();
});
displayQA('Bài 21', () => {
    const repo = new bai_21_1.Repository([
        new bai_03_1.Car('A', 'A-2', 2000),
        new bai_03_1.Car('B', 'B-2', 2020),
    ]);
    console.log(`Before: ${repo.getAll()}`);
    repo.add(new bai_03_1.Car('C', 'C-2', 2040));
    console.log(`After: ${repo.getAll()}`);
});
displayQA('Bài 22', () => {
    const stack = new bai_22_1.Stack();
    stack.push(10);
    stack.push(20);
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.isEmpty());
    console.log(stack.pop());
    console.log(stack.isEmpty());
});
displayQA('Bài 23', () => {
    const cash = new bai_23_1.CashPayment();
    cash.pay(100);
    const card = new bai_23_1.CardPayment("1234-5678-9876-5432");
    card.pay(200);
});
displayQA('Bài 24', () => {
    const fan = new bai_24_1.Fan();
    fan.turnOn();
    const ac = new bai_24_1.AirConditioner();
    ac.turnOn();
});
displayQA('Bài 25', () => {
    bai_25_1.Shape.describe();
});
displayQA('Bài 26', () => {
    const order = new bai_26_1.Order([
        new bai_26_1.Product('A', 100),
        new bai_26_1.Product('B', 200),
        new bai_26_1.Product('C', 300),
    ]);
    console.log(`Tổng tiền: ${order.totalPrice()}`);
});
displayQA('Bài 27', () => {
    const teacher = new bai_27_1.Teacher("Alice", "Mathematics");
    teacher.introduce();
});
displayQA('Bài 28', () => {
    const dog28 = new bai_28_1.Dog();
    dog28.makeSound();
    const cat28 = new bai_28_1.Cat();
    cat28.makeSound();
});
displayQA('Bài 29', () => {
    const robot = new bai_29_1.Robot();
    const car = new bai_29_1.Car();
    robot.move();
    car.move();
});
displayQA('Bài 30', () => {
    const students = [
        new bai_30_1.Student("Alice", "10th"),
        new bai_30_1.Student("Bob", "11th"),
    ];
    const teachers = [
        new bai_27_1.Teacher("Mr. Smith", "Mathematics"),
        new bai_27_1.Teacher("Ms. Johnson", "English"),
    ];
    const school = new bai_30_1.School(students, teachers);
    school.displayInfo();
});
