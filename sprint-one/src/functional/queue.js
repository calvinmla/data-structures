var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = 0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        index++;
      }
    }
    return storage[index] = value;
  };

  someInstance.dequeue = function() {
    var index = 0;
    var shift;
    for (var key in storage) {
      shift = storage[key];
      delete storage[key];
      break;
    }
    for (var key in storage) {
      storage[index] = storage[key];
      delete storage[key];
      index++;
    }
    return shift;
  };

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        size++;
      }
    }
    return size;
  };

  return someInstance;
};
