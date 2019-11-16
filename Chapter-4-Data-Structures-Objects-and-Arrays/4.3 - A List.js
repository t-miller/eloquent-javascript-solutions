/* eslint-disable require-jsdoc */
/*
Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
and write a listToArray function that produces an array from a list.
Also write the helper functions prepend,
which takes an element and a list and creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the given position in the list,
or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

// Your code here.
function arrayToList(anArray) {
  let listFromArray = {};
  let tempList = {};
  let priorList = {};

  for (let i = anArray.length - 1; i >= 0; i--) {
    tempList.value = anArray[i];

    if (i == anArray.length - 1) {
      tempList.rest = null;
    } else {
      tempList.rest = priorList;
    }

    priorList = tempList;

    if (i == 0) {
      listFromArray = tempList;
    }
    tempList = {};
  }
  return listFromArray;
};

function listToArray(aList) {
  const arrayFromList = [];
  let currentList = aList;
  let i = 0;
  let lastRest = {};

  while (lastRest != null) {
    arrayFromList[i] = currentList.value;
    lastRest = currentList.rest;
    currentList = currentList.rest;
    i++;
  }
  return arrayFromList;
};

function prepend(element, list) {
  const newList = {};

  newList.value = element;
  newList.rest = list;
  return newList;
};

function nth(list, number) {
  if (number == 0) {
    return list.value;
  } else if (list.rest != null) {
    return nth(list.rest, number - 1);
  } else {
    return undefined;
  }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
