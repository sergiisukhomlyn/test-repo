import { filterArrayByType } from './functions.js';

const logArrayValues = (arr, type) => {
    if (!Array.isArray(arr)) {
        return;
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr;

    resultingArray.forEach((element) => {
        console.log(element);
    });
};

console.log(logArrayValues);

const sum = (a, b) => a + b;
console.log(sum(1, 2));

const extract = (a, b) => a - b;
function extract2(a, b) {
    return b - a;
}

const numbers = [1, 8, 3, 4, 2];
numbers.sort((a, b) => a - b);
numbers.sort(extract);
console.log(numbers);

numbers.sort(extract2);
console.log(numbers);
