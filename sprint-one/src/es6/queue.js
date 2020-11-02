class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  enqueue(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  dequeue() {
    var index = 0;
    var shift = this.storage[0];
    if (this.storageSize > 0) {
      delete this.storage[0];
      this.storageSize--;
    }
    for (var key in this.storage) {
      this.storage[index] = this.storage[key];
      delete this.storage[key];
    }
    return shift;
  }

  size() {
    return this.storageSize;
  }
}
