const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr3, arr4) {
  if (eqArrays(arr3, arr4) === true) {
    console.log("✅✅✅match");
  } else {
    console.log("🛑🛑🛑no match");
  }
};


module.exports = assertArraysEqual;