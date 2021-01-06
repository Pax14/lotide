const tail = function(array) {
  let arrayTail = [];
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return (`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`🛑🛑🛑Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
