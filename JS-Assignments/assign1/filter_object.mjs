/** 
 * @typedef {Object} Fruits
 * @property {number} id
 * @property {string} name
 * @property {string} color
*/
/**
 * Filters an array of objects based on given name
 * @param {Array.<Fruits>} arr  - Array to search through
 * @param {string} name  - name of element to search for
 * @returns {Array.<Fruits>}
 */
function searchByName(arr, name) {
    if (!name) {
        console.log("You must provide a name to search for");
        return;
    }

    return arr.filter((fruit) => fruit.name.toLowerCase() === name.toLowerCase());
}

/**
 * Filters an array of objects based on given key and search_term
 * @param {Array.<T>} arr  - Array to search through
 * @param {string} key  - Key of array to look for
 * @param {string | number} search_term  - Value of key to match for
 * @returns {Array.<T>} 
 */
function searchByKey(arr, key, search_term) {
    return arr.filter((element) => {
        let value = element?.[key];
        if (typeof value === 'string') {
            return value.toLowerCase() === search_term.toLowerCase();
        } else if (typeof element[key] === 'number') {
            return element[key] === search_term
        }
        return false
    })
}

export { searchByKey, searchByName };

