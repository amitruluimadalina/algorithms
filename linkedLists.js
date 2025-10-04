// linkedin list =  linear data structure where each element, called a node, contains two parts: the data and a pointer (or reference) to the next node in the sequence.
// if a node's next pointer points to null => end of the list
// so each none will have a value and a next funct which will contain a ref for the next item
// head = the first nk
// with linked lists, you only get the head, so to change anything or lookup a value, you have to traverse the whole list
// in order to remove one of the nodes( except the first, can be removed by just changing the ref from head to 2nd item), we need to adjust the ref from the previous node to the one after but we don't have that because its singly linked
// singly linked lists

class SinglyNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  _string() {
    return String(this.value);
  }
}

const head = new SinglyNode(1);
const a = new SinglyNode(3);
const b = new SinglyNode(4);
const c = new SinglyNode(7);
head.next = a;
a.next = b;
b.next = c;
console.log(head);

let current = head;

while (current) {
  console.log(current);
  current = current.next;
}

function display(head) {
  let curr = head;
  const elements = [];
  while (curr) {
    elements.push(String(curr.value));
    curr = curr.next;
  }
  console.log(elements.join("->"));
}

display(head);

function search(head, val) {
  let curr = head;
  while (curr) {
    if (curr.value === val) return true;
    curr = curr.next;
  }
  return false;
}
console.log(search(head, 8));

// in order to fix the issue with no acces to the pointer from previous node, we have the linked list => can remove/ add nodes
// the head will and tail will point to null=> access from both directions
// these nodes contain value, next func and previous func
// doubly linked lists
class DoublyNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  _string() {
    return String(this.value);
  }
}

const head2 = new DoublyNode(1);
const a2 = new DoublyNode(3, null, head2);
head2.next = a2;
const b2 = new DoublyNode(4, null, a2);
a2.next = b2;
const c2 = new DoublyNode(7, null, b2);
b2.next = c2;

console.log(head2);

function display2(head) {
  let curr = head;
  const elements = [];
  while (curr) {
    elements.push(String(curr.value));
    curr = curr.next;
  }
  console.log(elements.join("<->"));
}

display2(head2);

function insertFront(head, tail, val) {
  const newNode = new DoublyNode(val, head);
  head.prev = newNode;
  return { newNode, tail };
}
const head3 = new DoublyNode(1);
const tail3 = head3;

const { newNode, tail } = insertFront(head3, tail3, 5);

display2(newNode);

function insertEnd(head4, tail4, val) {
  const newNode2 = new DoublyNode(val, null, tail4);
  tail4.next = newNode2;
  return { head4, newNode2 };
}
const head5 = new DoublyNode(1);
const tail5 = head3;

const { head4, newNode2 } = insertEnd(head5, tail5, 2);

display2(newNode2);

function memoize(fn) {
  const mapMemo = new Map();
  return function (...args) {
    const stringArr = JSON.stringify([...args]);
    const isMemoized = mapMemo.has(stringArr);

    if (isMemoized) {
      const existing = mapMemo.get(stringArr);
      return existing;
    }
    const result = fn(...args);
    mapMemo.set(stringArr, result);
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 3);
console.log(callCount);

// var cancellable = function (fn, args, t) {
//   const timeoutId = setTimeout(() => {
//     fn(...args);
//   }, t);

//   const cancelFn = () => {
//     clearTimeout(timeoutId);
//   };

//   return cancelFn;
// };

// const result = [];

// const fn = (x) => {
//   console.log(x, "X HERE");
//   return x * 5;
// };
// const args = [2],
//   t = 20,
//   cancelTimeMs = 50;

// const start = performance.now();

// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

// const cancel = cancellable(log, args, t);

// const maxT = Math.max(t, cancelTimeMs);

// setTimeout(cancel, cancelTimeMs);

// setTimeout(() => {
//   console.log(result, "HEREEEE"); // [{"time":20,"returned":10}]
// }, maxT + 15);

var cancellable = function (fn, args, t) {
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  const cancelFn = () => {
    clearInterval(intervalId);
  };

  return cancelFn;
};

const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;
const start = performance.now();
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result), "RESULT";
  [
    { time: 0, returned: 8 },
    { time: 35, returned: 8 },
    { time: 70, returned: 8 },
    { time: 105, returned: 8 },
    { time: 140, returned: 8 },
    { time: 175, returned: 8 },
  ];
}, cancelTimeMs + t + 15);
