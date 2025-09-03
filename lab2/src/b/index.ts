import { simulateTask } from "../a/index.js";

// Ex12
const ex12 = async () => {
    const result = await simulateTask(2000)
    console.log('Ex12 result: ', result);
}

// Ex13
const ex13 = async () => {
    try {
        throw new Error('Something went wrong')
    } catch (error) {
        console.error('Ex13 caught error: ', error);
    }
}

// Ex14
const ex14 = async (num: number) => {
    return new Promise<number>((resolve) => setTimeout(() => resolve(num * 3), 1000))
}

// Ex15
const ex15 = async () => {
    const result1 = await ex14(2)
    const result2 = await ex14(3)
    console.log('Ex15 result: ', result1, result2);
}

// Ex16
const ex16 = async () => {
    const result = await Promise.all([ex14(2), ex14(3), ex14(4)])
    console.log('Ex16 result: ', result);
}

// Ex17
const ex17 = async () => {
    const promises = [ex14(1), ex14(2), ex14(3)]
    for await(const result of promises) {
        console.log('Ex17 result: ', result);
    }
}

// Ex18
const fetchUser = async (id: number) => {
    return new Promise((resolve) => 
        setTimeout(() => resolve({ id, name: `User${id}` }), 1000)
    )
}

// Ex19
const fetchUsers = async (ids: number[]) => {
    const users = await Promise.all(ids.map((id) => fetchUser(id)))
    console.log('Ex19 result: ', users);
}

// Ex20
const ex20 = async () => {
    const timeout = new Promise((_, reject) => 
        setTimeout(()=> reject(new Error('Timeout exceeded')), 2000)
    )
    const api = fetchUser(1);
    try {
        const result =  await Promise.race([api, timeout])
        console.log('Ex20 result: ', result);
    } catch(err) {
        console.error('Ex20 error: ', err);
    }
}

export { ex12, ex13, ex14, ex15, ex16, ex17, fetchUser, fetchUsers, ex20 }