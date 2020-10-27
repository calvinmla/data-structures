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
  var newTree = new Tree(value);
  if (this.children.length === 0) {
    this.children.push(newTree);
  } else {
    for (var i = 0; i < this.children.length; i++) {
      //if ()
    }
  }
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      for (var key in this.children[i]) {
        if (this.children[i][key] === target) {
          return true;
        }
      }
    }
  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?

 addChild O()
 contains O()

 */
