function sumArrayElements(arr: (number | string)[]): number {
  let sum: number = 0;
  for (const element of arr) {
    if (typeof element === 'number') {
      sum += element;
    } else if (typeof element === 'string') {
      const num = parseFloat(element);
      if (!isNaN(num)) {
        sum += num;
      } else {
        console.warn(`Warning: Could not convert string '${element}' to a number for addition.`);
      }
    }
  }
  return sum;
}

const stringArray: string[] = ['10', '20', '30', 'abc'];

const numberArray: number[] = [1, 2, 3, 4, 5];

const stringArraySum = sumArrayElements(stringArray);
console.log('Sum of string array elements:', stringArraySum);

const numberArraySum = sumArrayElements(numberArray);
console.log('Sum of number array elements:', numberArraySum);
