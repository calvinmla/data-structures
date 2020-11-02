// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [node];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let key = this.nodes[node];
  if (key.length > 1) {
    for (let i = 0; i < key.length; i++) {
      if (key[i] !== node) {
        let index = this.nodes[key[i]].indexOf(node);
        this.nodes[key[i]].splice(index, 1);
      }
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var key = this.nodes[fromNode];
  for (var i = 0; i < key.length; i++ ) {
    if (key[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (parseInt(fromNode) !== toNode ) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(parseInt(fromNode));
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexOneWay = this.nodes[fromNode].indexOf(toNode);
  var indexOtherWay = this.nodes[toNode].indexOf(fromNode);
  if (indexOneWay > -1 && indexOtherWay > -1) {
    this.nodes[fromNode].splice(indexOneWay, 1);
    this.nodes[toNode].splice(indexOtherWay, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key, this.nodes[key]);
  }
};


/// passes all test but forEachNode() connectToFive creates duplicate connections to 5


/*
 * Complexity: What is the time complexity of the above functions?

 "time complexity refers to -OUR- implimentation style"
 addNode - O(1)
 contains - O(1)
 removeNode - O(n)
 hasEdge - O(n)
 addEdge - O(1)
 removeEdge - O(1)
 forEachNode - O(n)

 */


