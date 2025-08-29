import { displayNumberRadom, displayString, rejectWithError, resolveNumber, simulateTask } from "./a";

displayString.then((value) => {
    console.log(value);
})

resolveNumber.then((value) => {
    console.log(value);
})

rejectWithError.catch((error) => {
    console.error(error);
})

displayNumberRadom
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error);
    })

simulateTask(1000)
.then(value => console.log(value))
.catch(error => console.log(error))


 