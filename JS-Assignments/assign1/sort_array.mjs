/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 */
/**
 * @type {Array.<User>}
 */
let arr = [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew Aron',
}, {
    id: 4,
    name: 'Andrew Doe',
}];

/**
 * 
 * @param {Array.<User>} array - Array to be sorted
 * @param {string} key - Key based on which array needs to  be sorted
 * @returns {Array.<User>}
 */
function sortBy(array, key) {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j][key] > arr[j + 1][key]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp
            }
        }
    }
    return arr;
}


console.log(sortBy(arr, 'name'));
console.log(sortBy(arr, 'id'));
console.log(arr);