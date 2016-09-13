/*
Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.
*/
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
function century(person) {
  return Math.ceil(person.died / 100);
};

function groupBy(arr, func) {
  var arrStore = {};  
  var funcReturn;
  
  for (var i in arr) {
    funcReturn = func(arr[i]);
    if (arrStore.hasOwnProperty(funcReturn)) {
      arrStore[funcReturn].push(arr[i]);      
    }
    else {
      arrStore[funcReturn] = [arr[i]];
    }
  }
  return arrStore;  
};

var groupedPeopleByCentury = groupBy(ancestry, century)

for (var j in groupedPeopleByCentury) {
  var tempObj = groupedPeopleByCentury[j]
  var ageArray = [];
  
  for (var k in tempObj) {    
    ageArray.push(tempObj[k].died - tempObj[k].born);
  }
  console.log(j + ": " + average(ageArray))
};
