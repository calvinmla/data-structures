var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {
    'set_A': [],
    'set_B': []
  };
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.addTestA = function(value) {
  this._storage['set_A'].push(value);
};

setPrototype.addTestB = function(value) {
  this._storage['set_B'].push(value);
};

setPrototype.union = function() {
  var common = [];
  var setB = this._storage.set_B;
  var setA = this._storage.set_A;
  for (var i = 0; i < setA.length; i++) {
    for (var j = 0; j < setB.length; j++) {
      if (setA[i] === setB[j]) {
        common.push(setA[i]);
      }
    }
  }
  return JSON.stringify(common);
};

setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 add - O(1)
 contains - O(1)
 remove - O(1)
 addTestA - O(1)
 addTestB - O(1)
 union - O(n^2)

 */
