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

assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual([1,2,4], [1,3]); 
