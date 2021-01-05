const head = function(array) {
  return array[0];
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

