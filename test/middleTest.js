const middle = require('../middle');
const assert = require('chai').assert;

let testVar = middle([1, 2, 3, 4])
let testVar2 = middle([1, 2, 3, 4, 5, 6])
let testVar3 = middle([1, 2, 3])
let testVar4 = middle([1, 2, 3, 4, 5])
let testVar5 = middle([1])

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual((testVar), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual((testVar2), [3, 4]); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual((testVar3), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual((testVar4), [3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual((testVar5), []);
  });

});