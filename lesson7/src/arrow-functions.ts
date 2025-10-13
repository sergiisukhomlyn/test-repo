import { filterArrayByType } from './functions';

const logArrayValues = (arr: unknown[], type?: string): void => {
    if (!Array.isArray(arr)) {
        return;
    }

    const resultingArray = type && typeof type === 'string' ? filterArrayByType(arr, type) : arr;

    resultingArray.forEach((element: any) => {
        console.log(element);
    });
};

console.log(logArrayValues);

const sum = (a: number, b: number): number => a + b;
console.log(sum(1, 2));

const extract = (a: number, b: number): number => a - b;
function extract2(a: number, b: number): number {
    return b - a;
}

const numbers: number[] = [1, 8, 3, 4, 2];
numbers.sort((a, b) => a - b);
numbers.sort(extract);
console.log(numbers);

numbers.sort(extract2);
console.log(numbers);
