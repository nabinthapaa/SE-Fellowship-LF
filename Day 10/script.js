// fetch

let todos = [];
let todos_item = {};

const ids = [1, 2, 3, 4, 5];
for (let i of ids) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(todo_res => {
            todos.push(todo_res);
        })
        .catch(e => console.log(e));
}

const promises = []
console.log("Loading")
for (let i of ids) {
    const promise = fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    promises.push(promise);
    promise
        .then(res => res.json())
        .then(todo_res => {
            todos.push(todo_res);
            console.log(todo_res);
        })
}

Promise.all(promises)
    .then(() => console.log("Loading Finished"))


/**
 * * Promise.all - All promised resolved
 * * Promise.any - Any one promised resolved
 * * Promise.allSettled 
 */

const response = Promise.all(ids.map(id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(res => res.json())
}))

response.then((todos) => {
    console.log(todos);
    console.log("Finished")
})