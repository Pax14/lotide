const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4) === true) {
    console.log("match");
  } else {
    console.log("no match");
  }
};

const middle = function(array) {
  let finalArray = [];
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) { // if less than 2 numbers
    return finalArray;
  } else if (array.length % 2 === 0) { // for evens
    finalArray.unshift(array[mid]);
    finalArray.unshift(array[mid - 1]);
    return finalArray;
  } else { // for odds
    finalArray.unshift(array[mid]);
    return finalArray;
  }
};
let testVar = middle([1, 2, 3, 4])
let testVar2 = middle([1, 2, 3, 4, 5, 6])
let testVar3 = middle([1, 2, 3])
let testVar4 = middle([1, 2, 3, 4, 5])
let testVar5 = middle([1])

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []  

assertArraysEqual((testVar), [2, 3]);
assertArraysEqual((testVar2), [3, 4]);
assertArraysEqual((testVar3), [2]);
assertArraysEqual((testVar4), [3]);
assertArraysEqual((testVar5), []);

