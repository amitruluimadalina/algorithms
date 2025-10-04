class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    console.log(this.items);
    // return position where element is added to+
    return this.count - 1;
  }

  //remove element from end(last added) of the stack
  pop() {
    if (this.count === 0) return;
    const deletedItem = this.items[this.count - 1];
    this.items = this.items.slice(0, this.count - 2);
    this.count--;
    // return position where element is added to+
    return deletedItem;
  }

  //get last added element
  peek() {
    const lastAdded = this.items[this.count - 1];
    console.log(lastAdded);
    return lastAdded;
  }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(33);
newStack.pop();
newStack.peek();

var isValid = function (s) {
  if (s.length < 2) return false;
  const openingParantheses = ["(", "{", "["];
  const closingParantheses = [")", "}", "]"];
  const pairs = new Map();
  for (i = 0; i < openingParantheses.length; i++) {
    pairs.set(openingParantheses[i], closingParantheses[i]);
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (pairs.has(s[i])) {
      stack.push(s[i]);
    } else {
      const pair = pairs.get(stack[stack.length - 1]);
      if (pairs.get(stack[stack.length - 1]) === s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("([])}"));

class MinStack {
  constructor() {
    this.count = 0;
    this.items = [];
    this.minStack = [];
  }
  push(val) {
    this.count++;
    this.items[this.count - 1] = val;
    if (this.minStack.length === 0) {
      this.minStack[0] = val;
    } else {
      if (this.minStack[this.count - 2] > val) {
        this.minStack[this.count - 1] = val;
      } else {
        this.minStack[this.count - 1] = this.minStack[this.count - 2];
      }
    }

    return null;
  }
  pop() {
    this.count--;
    this.items = this.items.slice(0, this.count);
    this.minStack = this.minStack.slice(0, this.count);
    return null;
  }
  top() {
    return this.items[this.count - 1];
  }
  getMin() {
    return this.minStack[this.count - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 */
var obj = new MinStack();
obj.push(2);
obj.push(3);
obj.push(6);
obj.push(0);
obj.push(1);
obj.pop();
var top = obj.top();
var min = obj.getMin();
console.log(top, "top");
console.log(min, "min");
