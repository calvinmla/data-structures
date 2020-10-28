var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;

  var traverse = function (treeNode) {
    if (treeNode.value === target) {
      result = true;
    } else {
      var childrenLen = treeNode.children.length;
      if (len = childrenLen > 0 ) {
        for (var i = 0; i < childrenLen; i++) {
          traverse(treeNode.children[i]);
        }
      }
    }
  };
  traverse (this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addChild O(1) constant
 contains O(n^2) exponential

 */
