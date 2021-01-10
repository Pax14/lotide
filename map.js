const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

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



const results1 = map(words, word => word[0]);

console.log(assertArraysEqual(results1, ['g', 'd', 't', 'm', 't']));
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));