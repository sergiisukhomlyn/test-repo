console.log('------------------');

const a = 2.5;
const b = 3.5;
const c = '3.5';

if (a > b ) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b && a < c) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

console.log('------------------');
