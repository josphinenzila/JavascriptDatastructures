class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
var queue = new Queue();
console.log(queue.enqueue(12));
console.log(queue.enqueue(16));
console.log(queue.enqueue(20));
console.log(queue.enqueue(13));
console.log(queue.enqueue(34));
console.log(queue.enqueue(29));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
