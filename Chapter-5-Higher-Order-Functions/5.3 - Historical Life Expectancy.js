/*
Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.
*/
// Your code here.
function century(person) {
  return Math.ceil(person.died / 100);
};

function groupBy(arr, func) {
  var arrStore = {};  
  var funcReturn;
  
  for (var i in arr) {
    funcReturn = func(arr[i]);
    console.log("fR: " + funcReturn);
    if (arrStore.hasOwnProperty(funcReturn)) {
      arrStore[funcReturn].push(arr[i]);      
    }
    else {
      console.log("i: " + arr[i]);
      arrStore[funcReturn] = [arr[i]];
    }
  }
  return arrStore;  
};

console.log(groupBy(ancestry, century));
