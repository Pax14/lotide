const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log((`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`));
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


