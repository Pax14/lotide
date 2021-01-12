const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log((`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`));
  }
};


// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// assertEqual(1, 4);
// assertEqual(1, 1);
// console.log(assertEqual("Hello", "Hello"));


module.exports = assertEqual;