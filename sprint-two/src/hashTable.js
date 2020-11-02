

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, v); // if we set bucket equal to this, it is always undefined because this._storage.set does not equal anything. it only sets what 'this._storage[index]' is after running the checkLimit.
  var bucket = this._storage[index];
  if (!bucket) {
    bucket = [];
    bucket.push([k, v]);
    this._storage[index] = bucket;
  } else {
    for ( var i = 0; i < bucket.length; i++ ) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
  }

  // var bucket = this._storage[index];
  // if (!bucket) { // if its empty bucket with no tuples yet
  //   bucket = [];
  //   bucket.push([k, v]);
  //   this._storage[index] = bucket;
  // } else {
  //   // has tuple inside
  //   for ( var i = 0; i < bucket.length; i++ ) {
  //     if (bucket[i][0] === k) { // if there is a key
  //       bucket[i][1] = v; // set the value changes value if same key given
  //     } else { //else incriment bucket size +1 by pushing [k,v]
  //       bucket.push([k, v]);
  //     }
  //   }
  // }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.get(index);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  // var bucket = this._storage[index];
  // for (var i = 0; i < bucket.length; i++) {
  //   if (bucket[i][0] === k) {
  //     return bucket[i][1];
  //   }
  // }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      delete bucket[i][1];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

insert - O(1)
retrieve - O(n) - although we understand it is highly unlikely
remove - O(n) - although we understand it is highly unlikely

 */


