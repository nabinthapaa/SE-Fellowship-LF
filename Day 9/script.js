const arr = [1, 2, 3, 4, 5];

const r = {
    0: 1,
    1: 2,
    3: 4,
    4: 5
}

let obj = {};

arr.reduce((previousValue, currentValue) => {
    obj = { [previousValue]: currentValue, ...obj }
    return previousValue += 1;
}, 0)


console.log(obj)