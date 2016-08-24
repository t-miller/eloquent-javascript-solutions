/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

// Your code here.
function min(numOne, numTwo) {
  if (numOne < numTwo) {
    return numOne;
  }
  else {
    return numTwo;
  }
};
