const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

let testVar = middle([1, 2, 3, 4])
let testVar2 = middle([1, 2, 3, 4, 5, 6])
let testVar3 = middle([1, 2, 3])
let testVar4 = middle([1, 2, 3, 4, 5])
let testVar5 = middle([1])

assertArraysEqual((testVar), [2, 3]);
assertArraysEqual((testVar2), [3, 4]);
assertArraysEqual((testVar3), [2]);
assertArraysEqual((testVar4), [3]);
assertArraysEqual((testVar5), []);