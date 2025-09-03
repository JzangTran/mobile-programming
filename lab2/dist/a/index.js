// Ex1
const ex1 = new Promise((resolve) => {
    setTimeout(() => resolve('Hello Async'), 2000);
});
// Ex2
const ex2 = () => {
    return new Promise((resolve) => { setTimeout(() => resolve(10), 1000); });
};
// Ex3
const ex3 = () => {
    return new Promise((resolve, reject) => { setTimeout(() => reject('Something went wrong'), 1000); });
};
// Ex4
const ex4 = () => {
    new Promise((resolve) => resolve(Math.random()))
        .then((num) => console.log("Random number:", num))
        .catch((err) => console.error("Error:", err));
};
// Ex5
const simulateTask = (time) => {
    return new Promise((resolve) => setTimeout(() => resolve("Task done"), time));
};
// Ex6
const ex6 = () => {
    const results = Promise.all([
        simulateTask(1000),
        simulateTask(1500),
        simulateTask(2000),
    ]);
    console.log('Ex6 results: ', results);
};
// Ex7
const ex7 = () => {
    const results = Promise.race([
        simulateTask(500),
        simulateTask(1500),
        simulateTask(1000),
    ]);
    console.log('Ex7 results: ', results);
};
// Ex8
const ex8 = () => {
    new Promise((resolve, reject) => { resolve(2); })
        .then(num => num * num)
        .then(num => num * 2)
        .then(num => num + 5)
        .then(res => console.log('Ex8 result: ', res));
};
// Ex9
const ex9 = async () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = await new Promise((resolve) => setTimeout(() => resolve(numbers.filter((n) => n % 2 === 0)), 1000));
    console.log("Ex9 even numbers:", result);
};
// Ex10
const ex10 = async () => {
    new Promise((resolve) => setTimeout(() => resolve('Success Ex10!'), 1000))
        .then(res => console.log('Ex10 result: ', res))
        .catch(err => console.error(err))
        .finally(() => console.log('Done'));
};
export { ex1, ex2, ex3, ex4, simulateTask, ex6, ex7, ex8, ex9, ex10 };
