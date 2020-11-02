var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    storageSize: 0
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  },

  dequeue: function() {
    var index = 0;
    var shifted = this.storage[0];
    if (this.storageSize > 0) {
      delete this.storage[0];
      this.storageSize--;
    }
    for (var key in this.storage) {
      this.storage[index] = this.storage[key];
      delete this.storage[key];
      index++;
    }
    return shifted;
  },

  size: function() {
    return this.storageSize;
  }
};