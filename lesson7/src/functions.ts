function sumArrayElements(arr: number[]): number {
    if (!Array.isArray(arr)) {
        throw new Error('The input argument must be an array.');
    }

    return arr.reduce((accumulator, current) => accumulator + current, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
const total: number = sumArrayElements(numbers);

console.log(`Sum of array elements: ${total}`);
console.log('-------------------------------');

const stringArray: string[] = ['Hello', 'World', 'JavaScript', 'example'];
const numberArray: number[] = [10, 20, 30, 40];

function processArrays(strings: string[], numbers: number[]): (string | number)[] {
    const combinedArray: (string | number)[] = [...strings, ...numbers];
    return combinedArray;
}

const result: (string | number)[] = processArrays(stringArray, numberArray);
console.log(result);
