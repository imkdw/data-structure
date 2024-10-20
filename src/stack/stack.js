export default class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(item) {
    this.items.push(item);
    this.top += 1;
  }

  pop() {
    this.top -= 1;
    return this.items.pop();
  }

  isEmpty() {
    return this.top === -1;
  }
}
