const obj = {};

obj.key1 = 'value1';
obj['key2'] = 'value2';
obj['key3 with space'] = 'value3 with spaces';
obj.key4 = {
    subKey1: 1,
    subKey2: '2',
    subKey3: true,
    subKey4: []
};

console.log(obj);
console.log(JSON.stringify(obj));

const wantedCopy = obj;
wantedCopy.key = 1;
console.log(obj, wantedCopy);

const singleLevelCopy = { ...obj};
singleLevelCopy.key2 = 'changed value in the copied object';
singleLevelCopy.key4.subKey1 = 'changed nested object property';
console.log('---single level copy---');
console.log(obj, singleLevelCopy);

const deepCopy = structuredClone(obj);
const deepCopyWithDoubleConversion = JSON.parse(JSON.stringify(obj));
deepCopy.key4.subKey3 = 'changed nested property from deep copy demo';
deepCopyWithDoubleConversion.key4.subKey3 = 'changed nested property from deep copy with double conversion demo';
console.log('---deep copy;---');
console.log(obj, deepCopy, deepCopyWithDoubleConversion);
