function sumAny(a, b) {
    return a + b;
}
const result = sumAny(1, 2);
const result2 = sumAny(2, '2');
console.log(result, result2);

function logArrayValues(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

const arr1 = [1, 2, 3];
const arr2 = ['1', '2', '3'];
console.log(logArrayValues(arr1));
console.log(logArrayValues(arr2));

export function filterArrayByType(arr, type) {
    return arr.filter(item => typeof item === type);
}

const anyArray = [1, '2', true, {num: 4}];

console.log(filterArrayByType(anyArray, 'string'));
console.log(filterArrayByType(anyArray, 'boolean'));
