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

module.exports = middle;



