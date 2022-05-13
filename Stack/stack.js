class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //using unshift
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  //using shift
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
var stack = new Stack();
console.log(stack.push(12));
console.log(stack.first.val);
console.log(stack.last.val);
console.log(stack.push(16));

console.log(stack.push(20));
console.log(stack.push(13));
console.log(stack.push(34));
console.log(stack.push(29));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
