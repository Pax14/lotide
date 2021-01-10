const eqArrays = function(arr1, arr2) {
  for (let k = 0; k < arr1.length; k++) {
    if (arr1[k] !== arr2[k]) {
      return false;
    }
  } return true;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let final = false;
  if (object1.length !== object2.length) {
    return false;
  } else {
    for (i in object1) {
      if (object1[i] === object2[i]) {
        final = true;
      } else if (Array.isArray(object1[i]) || Array.isArray(object2[i])) {
        final = (eqArrays(object1[i], object2[i]));
      } else {
        final = false;
      }
    }
    for (j in object2) {
      if (object2[j] === object1[j]) {
        final = true;
      } else {
        final = false;
      }
    }
  }
  return final;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log((`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
  } else {
    console.log((`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false