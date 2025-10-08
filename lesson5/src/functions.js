function sumArrayElements(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The input argument must be an array.');
    }

    return arr.reduce((accumulator, current) => accumulator + current, 0);
}
console.log('-------------------------------');
const numbers = [1, 2, 3, 4, 5];
const total = sumArrayElements(numbers);

console.log(`Sum of array elements: ${total}`);

const stringArray = ['Hello', 'World', 'JavaScript', 'example'];

const numberArray = [10, 20, 30, 40];

function processArrays(strings, numbers) {
    const combinedArray = [...strings, ...numbers];
    return combinedArray;
}

const result = processArrays(stringArray, numberArray);
console.log(result);
