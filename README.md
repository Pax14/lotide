# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pax14/lotide`

**Require it:**

`const _ = require('@pax14/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: function for asserting that two arrays are equal.
* `assertEqual(...)`: function for asserting that two arguements are equal.
* `assertObjectsEqual(...)`: function for asserting that two objects are equal.
* `countLetters(...)`: function for counting the number of times each unique character shows up in a full string. Ignores spaces.
* `countOnly(...)`: function for counting the number of a times a string, that is passed through an arguement, appears in the full array.
* `eqArrays(...)`: function for determining if two arrays are the the same.
* `eqObjects(...)`: function for determining if two objects are the the same.
* `findKey(...)`: function to return the key to the value that matches the callback function.
* `findKeyByValue(...)`: function to return the key of an object, given the value passed as an argument into the function.
* `head(...)`: function to return the first value of an array.
* `letterPositions(...)`: function that returns an object that will store each unique character (no spaces) as a key and has a value array determined by the position of that character in the full string.
* `map(...)`: function take an array and a callback function in which the callback function is run on each string in the array. The output returns a new array.
* `middle(...)`: function to return the middle portion of a given array.
* `tail(...)`: function to return an array that removes the first value of that array.
* `takeUntil(...)`: function that performs a callback on a given array until it becomes truthy. It then creates a new array that contains from the beginning of the given array up to where the callback function returned truthy.
* `without(...)`: function that takes creates a new array by adjusting the first array to remove any characters contained in the second array.
