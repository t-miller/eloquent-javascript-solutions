/* eslint-disable require-jsdoc */
/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That would
work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/

// Your code here (and the code from the previous exercise)
class Group {
  // Your code here.
  constructor() {
    this.values = [];
  }
  add(x) {
    if (!this.has(x)) {
      this.values.push(x);
    }
  }
  delete(x) {
    if (this.has(x)) {
      this.values.splice(this.values.indexOf(x));
    }
  }
  has(x) {
    return this.values.indexOf(x) > -1;
  }
  static from(iterObj) {
    const fromGroup = new Group();
    for (const element of iterObj) {
      fromGroup.add(element);
    }
    return fromGroup;
  }
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }
  next() {
    if (this.index >= this.group.values.length) return {done: true};
    const out = {value: this.group.values[this.index], done: false};
    this.index++;
    return out;
  }
}

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
