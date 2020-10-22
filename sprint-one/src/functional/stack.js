var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.push = function(value) {
    var index = 0;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        index++;
      }
    }
    return storage[index] = value;
  };

  someInstance.pop = function() {
    var index = 0;
    var pop;
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        index++;
      }
    }
    pop = storage[index - 1];
    delete storage[index - 1];
    return pop;
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
