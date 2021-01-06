const eqArrays = function(arr1, arr2) {
  let i = arr1.length;
    if (i != arr2.length) return false;
    while (i--) {
        if (arr1[i] !== arr2[i]) 
        return false;
    }
    return true;
};

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4) === true) {
    console.log("match");
  } else {
    console.log("no match");
  }
};

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[i] === itemsToRemove[k]) {
        source.splice(i, 1);
      }
    }
  }
  console.log(source);
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);