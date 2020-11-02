var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value; // value is the root
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (typeof value === 'number') {
    var traverse = function (node) {
      if (value < node.value && node.left === null) {
        node.left = BinarySearchTree(value);
        return;
      } else if (value < node.value && node.left !== null) {
        traverse(node.left);
      } else if (value > node.value && node.right === null) {
        node.right = BinarySearchTree(value);
        return;
      } else if (value > node.value && node.right !== null) {
        traverse(node.right);
      }
    };
    traverse(this);
  }
};


bstMethods.contains = function(target) {
  var result = false;
  var traverse = function (node) {
    if (node.value === target) {
      result = true;
    } else if (target < node.value && node.left !== null) {
      traverse(node.left);
    } else if (target > node.value && node.right !== null) {
      traverse(node.right);
    }
  };
  traverse(this);
  return result;
};

bstMethods.depthFirstLog = function(callback) {
  var traverse = function(node) {
    callback(node.value);
    if (node.left !== null) {
      traverse(node.left);
    }
    if (node.right !== null) {
      traverse(node.right);
    }
  };
  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?

 insert - O(n) - worst case O(log(n)) - average
 contains - O(n) - worst case O(log(n)) - average
 depthFirstLog - O(n) - worst case O(log(n)) - average

 */