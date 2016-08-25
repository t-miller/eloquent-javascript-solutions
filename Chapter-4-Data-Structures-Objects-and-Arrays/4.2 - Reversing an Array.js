/*

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

*/

// Your code here.
function reverseArray(anArray) {
  
  var newArray = [];
  var j = anArray.length - 1;
  
  for (i = 0; i < anArray.length; i++) {
    newArray[i] = anArray[j];
    j--;
  }
  
  return newArray;
  
};

function reverseArrayInPlace(anArray) {
  
  var tempStorageLeft = null;
  var tempStorageRight = null;
  var j = anArray.length - 1;
  
  for(var i = 0; i < Math.floor(anArray.length/2); i++) {
    tempStorageLeft = anArray[i];
    tempStorageRight = anArray[j];
    
    anArray[i] = tempStorageRight;
    anArray[j] = tempStorageLeft;
    
    j--;
  }
};
