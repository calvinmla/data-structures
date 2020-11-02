class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  push(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  pop() {
    var popped = this.storage[this.storageSize - 1];
    if (this.storageSize > 0) {
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
    }
    return popped;
  }

  size() {
    return this.storageSize;
  }
}