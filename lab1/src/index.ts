import { Person } from "./bai_01";
import { Student } from "./bai_02";
import { Car } from "./bai_03";
import { Rectangle } from "./bai_04";
import { BankAccount } from "./bai_05";
import { getProductsByMinPrice, Product } from "./bai_08";
import { Account } from "./bai_10";
import { Cat, Dog } from "./bai_11";
import { Cat as Cat19, Dog as Dog19 } from "./bai_19";
import { Bird, Fish } from "./bai_12";
import { Circle, Square } from "./bai_13";
import { Developer } from "./bai_14/Developer";
import { Manager } from "./bai_14/Manager";
import { Library } from "./bai_15";
import { Box } from "./bai_16";
import { Logger } from "./bai_17";
import { MathUtil } from "./bai_18";
import { Animal } from "./bai_19";
import { Cat as Cat_28, Dog as Dog_28 } from "./bai_28";
import { Bike as Bike20, Car as Car20 } from "./bai_20";
import { Repository } from "./bai_21";
import { Stack } from "./bai_22";
import { CardPayment, CashPayment } from "./bai_23";
import { AirConditioner, Fan } from "./bai_24";
import { Shape } from "./bai_25";
import { Order, Product as Product26 } from "./bai_26";
import { Teacher } from "./bai_27";
import { Robot, Car as Car29 } from "./bai_29";
import { School, Student as Student30, Teacher as Teacher30 } from "./bai_30";

const displayQA = (title: string, content: any) => {
    console.log(`\n======== ${title} ========`);
    if(typeof content === 'function') {
        content();
    } else {
        console.log(content);
    }   
}

displayQA('Bài ', () => {})


displayQA('Bài 1', () => {
    const person = new Person('John', 22);
    console.log(person.toString())
});


displayQA('Bài 2', () => {
    const student = new Student('John', 22, 9.5);
    console.log(student.toString())
});


displayQA('Bài 3', () => {
    const car = new Car("Toyota", "Corolla", 2021);
    console.log(car.toString())
});

displayQA('Bài 4', () => {
    const rectangle = new Rectangle(10, 20);
    console.log(`area: ${rectangle.area()}, perimeter: ${rectangle.perimeter()}`);
});


displayQA('Bài 5', () => {
    const bankAccount = new BankAccount(0);
    bankAccount.deposit(5000);
    bankAccount.withdraw(1000);
    console.log(`balance: ${bankAccount.balance}`);
});



displayQA('Bài 7', () => {
    const products = [
        new Product('Car', 20),
        new Product('Bike', 100),
        new Product('Chocolate', 400),
        new Product('Pikachu', 200),
    ]
    console.log(getProductsByMinPrice(products, 100));
})

displayQA('Bài 8', () => {
    const dog = new Dog('Cậu Vàng');
    console.log(dog.bark());
    const cat = new Cat('Tom');
    console.log(cat.meow());
});

displayQA('Bài 10', () => {
    const account = new Account('123', 'admin', '123');
    console.log(account);
})

displayQA('Bài 11', () => {
    const dog11 = new Dog('Kiki');
    const cat11 = new Cat('Tom');
    dog11.bark();
    cat11.meow();
})

displayQA('Bài 12', () => {
    const bird = new Bird('Guru');
    const fish = new Fish('Nemo');
    bird.fly()
    fish.swim()
})

displayQA('Bài 13', () => {
    const square = new Square(4);
    const circle = new Circle(4);
    console.log(`Square: ${square.area()}`);
    console.log(`Circle: ${circle.area()}`);
})

displayQA('Bài 14', () => {
    const manager = new Manager('Nam');
    const dev = new Developer('Quan');
    manager.manage()
    dev.code()
})

displayQA('Bài 15', () => {
    const lib = new Library([], []);
    console.log(`Before: ${lib.books}`);
    lib.addBook('Tom', 'Me', 2000);
    console.log(`After: ${lib.books}`);
})

displayQA('Bài 16', () => {
    const box1 = new Box(20)
    console.log(`value: ${box1.getValue()}, type: ${typeof box1.getValue()}`);
    const box2 = new Box('Hello')
    console.log(`value: ${box2.getValue()}, type: ${typeof box2.getValue()}`);
})

displayQA('Bài 17', () => {
    Logger.getInstance().log('Log 1 ................!')
})

displayQA('Bài 18', () => {
    const a = 4, b = 2;
    console.log(`Tổng: ${MathUtil.add(a, b)}`);
    console.log(`Hiệu: ${MathUtil.substract(a, b)}`);
    console.log(`Tích: ${MathUtil.multiply(a, b)}`);
    console.log(`Thương: ${MathUtil.divide(a, b)}`);
    
})

displayQA('Bài 19', () => {
    const animals: Animal[] = [
        new Dog19("Buddy"),
        new Cat19("Kitty"),
        new Animal("GenericAnimal")
    ];
    for (const animal of animals) {
        animal.sound(); 
    }
})

displayQA('Bài 20', () => {
    const car = new Car20('B', 'B-2', 2000);
    const bike = new Bike20('A', 'A-2', 2020);
    car.run();
    bike.run();
})

displayQA('Bài 21', () => {
    const repo = new Repository([
        new Car('A', 'A-2', 2000),
        new Car('B', 'B-2', 2020),
    ]);
    console.log(`Before: ${repo.getAll()}`);
    repo.add(new Car('C', 'C-2', 2040));
    console.log(`After: ${repo.getAll()}`);
})

displayQA('Bài 22', () => {
    const stack = new Stack()
    stack.push(10);
    stack.push(20);
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.isEmpty());
    console.log(stack.pop());
    console.log(stack.isEmpty());
})

displayQA('Bài 23', () => {
    const cash = new CashPayment();
    cash.pay(100);
    const card = new CardPayment("1234-5678-9876-5432");
    card.pay(200);
})

displayQA('Bài 24', () => {
    const fan = new Fan();
    fan.turnOn();
    const ac = new AirConditioner();
    ac.turnOn();
})

displayQA('Bài 25', () => {
    Shape.describe(); 
})

displayQA('Bài 26', () => {
    const order = new Order([
        new Product26('A', 100),
        new Product26('B', 200),
        new Product26('C', 300),
    ])
    console.log(`Tổng tiền: ${order.totalPrice()}`);
})

displayQA('Bài 27', () => {
    const teacher = new Teacher("Alice", "Mathematics");
    teacher.introduce();
})

displayQA('Bài 28', () => {
    const dog28 = new Dog_28()
    dog28.makeSound()
    const cat28 = new Cat_28()
    cat28.makeSound()
})

displayQA('Bài 29', () => {
    const robot = new Robot();
    const car = new Car29();
    robot.move();
    car.move();
})

displayQA('Bài 30', () => {
    const students = [
        new Student30("Alice", "10th"),
        new Student30("Bob", "11th"),
    ];

    const teachers = [
    new Teacher("Mr. Smith", "Mathematics"),
    new Teacher("Ms. Johnson", "English"),
    ];

    const school = new School(students, teachers);
    school.displayInfo();
})
