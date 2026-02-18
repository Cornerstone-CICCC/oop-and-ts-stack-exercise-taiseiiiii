// Create a function called removeEvenNums that removes even numbers from the stack
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require('../lib/Stack')

function removeEvenNums(stack) {
  const tempStack = new Stack();
  while (!stack.isEmpty()) {
    tempStack.push(stack.pop());
  }
  while (!tempStack.isEmpty()) {
    const val = tempStack.pop();
    if (val % 2 !== 0) {
      stack.push(val);
    }
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(1);
stack.push(3);
stack.push(6);

removeEvenNums(stack)
console.log(stack.printStack()) // [5, 1, 3]