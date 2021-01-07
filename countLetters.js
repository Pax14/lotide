const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log((`✅✅✅Assertion Passed: ${actual} === ${expected}`));
  } else {
    console.log((`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`));
  }
};

const countLetters = function(testString) {
  const answer = {};
  for (let i of testString) { //get rid of spaces
    if (i !== ' ') {
      if (answer[i]) { // add 1 to key (which is a letter) if the key already exists
        answer[i] += 1;
      } else {
        answer[i] = 1; // add new key and make the value = 1
      }
    } 
  }
  return answer
}


console.log(countLetters('This is Lighthouse Labs'))
console.log(countLetters('Paxon is tired right now'))
console.log(countLetters('I am about to fall asleep'))