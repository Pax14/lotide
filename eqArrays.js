
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let i = arr1.length;
    if (i != arr2.length) return false;
    while (i--) {
        if (arr1[i] !== arr2[i]) 
        return false;
    }
    return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);