import { searchByKey, searchByName } from './filter_object.mjs';
import aboutme from './info.mjs';
import printStarTopDown from './star_pattern.mjs';

printStarTopDown(10);

const { education } = aboutme;
education.length && education.forEach(element => {
    console.log(`Name: ${element.name}, Date: ${element.enrolledDate}`);
});

let fruits = [
    { id: 1, name: 'Banana', color: 'Yellow' },
    { id: 2, name: 'Apple', color: 'Red' }
]
console.log(searchByName(fruits, 'apple'));
console.log(searchByKey(fruits, 'name', 'apple'));


