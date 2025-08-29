// Ex1
export const displayString = new Promise((resolve, reject) => {
    setTimeout(
        ()=> resolve('Hello Async'),
        2000
    )
});


// Ex2
export const resolveNumber = new Promise((resolve, reject) => {
    setTimeout(
        () => resolve(10),
        1000
    )
});

// Ex3
export const rejectWithError = new Promise((resolve, reject) => {
    setTimeout(
        () => reject('Something went wrong'),
        1000
    )
});

// Ex4
const handleNumberRandom = () => {
    let result = Math.random() * 100
    return result;
}

export const displayNumberRadom = new Promise((resolve, reject) => {
    resolve(handleNumberRandom())
    reject('Something went wrong!')
})

// Ex5
export const simulateTask = (time: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve('Task done')
                reject('Error')
            },
            time
        )
    })
}

// Ex6
export const promiseAll = Promise.all([
    new Promise((resolve, reject) => {}),
    new Promise((resolve, reject) => {}),
    new Promise((resolve, reject) => {}),
])

// Ex7
export const promiseRace = Promise.race([

])

// Ex8
export const promiseChain = new Promise((resolve, reject) => {})

// Ex9
export const promiseArray = new Promise((resolve, reject) => {
    
})
