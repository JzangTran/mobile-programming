// Ex21
const ex21 = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(resp => resp.json())
    console.log('Ex21 result: ', data);
}

// Ex22
const ex22 = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/2",
    ];
    const result = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
    console.log('Ex22 result: ', result);
}


// Ex23
const ex23 = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(resp => resp.json())
        .then(data => data.filter((todo: any) => todo.completed))
    console.log('Ex23 result: ', result);
}

// Ex24
const postData = async () => {
    const result = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        }
    ).then(resp => resp.json())
    console.log('Ex24 result: ', result);
}

// Ex25
const downloadFile = async () => {
    return new Promise((resolve) => 
        setTimeout(() => {
            resolve('Ex25: File downloaded')
        }, 3000)
    )
}

// Ex26
const ex26 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Ex26: waited 5 seconds");
}


// Ex27
const fetchWithRetry = async (url: string, retries: number) => {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch failed");
            return await res.json();
        } catch (err) {
            console.warn(`Retry ${i + 1}/${retries}`);
            if (i === retries - 1) throw err;
        }
    }
}

// Ex28
const batchProcess = async () => {
    const tasks = Array.from({ length: 5 }, (_, i) =>
        new Promise((resolve) => setTimeout(() => resolve(`Task ${i + 1}`), 1000))
    );
    const results = await Promise.all(tasks);
    console.log("Ex28 result:", results);
}

// Ex29
const queueProcess = async () => {
    const tasks = Array.from({ length: 3 }, (_, i) => async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(`Task ${i + 1} done`);
    })
    for (const task of tasks) {
        await task();
    }
}


// Ex30
const ex30 = async () => {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/todos/999999",
    ];
    const results = await Promise.allSettled(
        urls.map((url) => fetch(url).then((r) => r.json()))
    );
    console.log("Ex30:", results);
}

export { ex21, ex22, ex23, postData, downloadFile, ex26, fetchWithRetry, batchProcess, queueProcess, ex30 }