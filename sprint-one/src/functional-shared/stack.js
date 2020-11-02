var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage: {},
    storageSize: 0
  };
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  },

  pop: function() {
    var popped = this.storage[this.storageSize - 1];
    if (this.storageSize > 0) {
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
    }
    return popped;
  },

  size: function() {
    return this.storageSize;
  }
};

