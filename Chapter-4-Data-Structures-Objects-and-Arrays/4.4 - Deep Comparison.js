/*
The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

// Your code here.
function deepEqual(valOne, valTwo) {
  var valuesEqual = false;
  var oneProperties = 0;
  var twoProperties = 0;
  
  if ((typeof valOne === "object" && typeof valTwo === "object") && (valOne != null && valTwo != null)) {
    
    for (var i in valOne) {
      if (valOne.hasOwnProperty(i)) {
        oneProperties++;
      }
    }
    
    for (var j in valTwo) {
      if (valTwo.hasOwnProperty(j)) {
        twoProperties++;
      }
    }
    
    if (oneProperties === twoProperties) {
      for (var k = 0; k < oneProperties; k++) {
        
      }
    }
  }
  else {
    if (valOne === valTwo) {
      valuesEqual = true;
    }
  }
  return valuesEqual;
};
