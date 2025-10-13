function hello(param: string): void {
    console.log(`Hello ${param}`)
}

hello('world');
hello(['str1', 'str2'].join(','));

function calcAdd(a: number | string, b: number | string): number {
    // rule for checking if string are from numbers
    const testPassed = hasNumberAndDecimal(a.toString()) && hasNumberAndDecimal(b.toString());
    const normalizedA = typeof a === 'string' && testPassed ? parseFloat(a) : a as number;
    const normalizedB = typeof b === 'string' && testPassed ? parseFloat(b) : b as number;
    return normalizedA + normalizedB;
}

function hasNumberAndDecimal(str: string): boolean {
    return /^\d+\.\d+$/.test(str);
}

const result1 = calcAdd(1, 2);
const result2 = calcAdd('1', '2');
console.log(result1, result2);
