/* eslint-disable require-jsdoc */
/*
The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

// Your code here.
function deepEqual(valOne, valTwo) {
  let valuesEqual = true;

  if ((typeof valOne === 'object' && typeof valTwo === 'object') &&
      (valOne != null && valTwo != null)) {
    for (const i in valOne) {
      if (valOne.hasOwnProperty(i)) {
        if (valTwo.hasOwnProperty(i)) {
          valuesEqual = deepEqual(valOne[i], valTwo[i]);
          if (!valuesEqual) {
            return false;
          }
        }
      }
    }
  } else {
    if (valOne != valTwo) {
      valuesEqual = false;
    }
  }
  return valuesEqual;
};

const obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
// → true
