let numbers = [1, 2, 3, 4];
function transform(collection, tranFunc) {
    return collection.map(tranFunc);
}

let output = transform(numbers, function (num) {
    return num * 2;
});

console.log(output);