/**
 * 
 * @param {} obj 
 * @param {string} key 
 * @param {string} _default 
 */
function get(obj, key, _default) {
    if (!key) return _default;
    const keys = key.split('.');
    let value_obj = { ...obj };
    let i = 0;
    let value;
    while (Object.keys(value_obj).includes(keys[i])) {
        if (i >= keys.length - 1) {
            value = value_obj[keys[keys.length - 1]];
            break;
        }
        value_obj = { ...value_obj[keys[i]] };
        i++;
    }
    return value ? value : _default;
}

const obj = {
    name: 'John',
    details: {
        firstName: {
            required: true,
            value: 'John'
        },
        lastName: {
            required: false,
            value: 'Smith'
        },
        middleName: {
            required: false
        }
    },
    hobbies: ['nothing']
}

const firstName = get(obj, 'details.firstName.value'); // 'John'
const middleName = get(obj, 'details.middleName.value', 'N/A'); // 'N/A'
const middleNameData = get(obj, 'details.middleName.value.data', 0); // undefined
const hobbies = get(obj, 'hobbies'); // undefined
const h = get({}, 'hksdf', null); // undefined
const i = get(obj, '', null);
const j = get(obj);
const k = get(null, "null");
const l = get(obj, null, 0);
const m = get(null, null, 'hello');


console.log({ firstName, middleName, middleNameData, hobbies, h, i, j, k, l, m })