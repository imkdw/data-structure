class Node {
  constructor(value) {
    this.value = value;
    this.prevNode = null;
    this.nextNode = null;
  }
}

export default class Deque {
  constructor() {
    this.head = null;
    this.front = 0;
    this.rear = 0;
  }

  shift() {}

  unshift(value) {}

  pop() {}

  push(value) {
    const node = new Node(value);
    this.rear;
  }
}
