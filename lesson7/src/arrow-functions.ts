const sumArraysElements = <T extends number>(arr: T[]): number => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const concatenateStringArray = (arr: string[]): string => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, '');
};

const numberArray1: number[] = [10, 20, 30, 40, 50];

const stringArray1: string[] = ['Hello', ' ', 'World', '!'];

const numberResult = sumArraysElements(numberArray1);
console.log('Sum of number array elements:', numberResult);

const stringResult = concatenateStringArray(stringArray1);
console.log('Concatenated string array elements:', stringResult);
