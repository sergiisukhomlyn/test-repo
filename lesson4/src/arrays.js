console.log('------------------');
const stringArray = ['apple', 'banana', 'cherry'];
console.log(stringArray);

const numberArray = [1, 5, 2, 8, 3, 7];
console.log(numberArray);

const booleanArray = [true, false, true, false];
console.log(booleanArray);

const anyArray = ['text', 123, true, null, {name: 'object'}];
console.log(anyArray);

console.log('------------------');
const filteredArray = stringArray.filter((item) => typeof item === 'string');
const foundElement = numberArray.find((item) => typeof item === 'number');
const sortedElement = numberArray.sort((a, b) => a - b);
const includedElement = stringArray.includes('apple');
console.log(filteredArray, foundElement, sortedElement, numberArray, includedElement);

console.log('------------------');
const evenNumbers = anyArray.filter(function(number) {
    return number > 0;
});

console.log(evenNumbers);

console.log('------------------');
console.log('String');
stringArray.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});

console.log('------------------');
console.log('\nNumber:');
numberArray.forEach(function(item, index) {
    console.log(`Element №${index + 1}: ${item}`);
});
