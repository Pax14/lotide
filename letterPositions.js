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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

// TEST CODE

let test = letterPositions("lighthouse in the house").e
assertArraysEqual(test, [9, 16, 22]);

let testTwo = letterPositions("hello").e
assertArraysEqual(testTwo, [1]);
