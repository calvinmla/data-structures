var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);

    if (this.tail) { //while the tail is pointing to something / has something

      this.tail.next = newNode; // make the next pointer point to the  new node so the link is established
    } else {
      //start here if linklist is empty
      // console.log('1st : ');
      this.head = newNode; // 1st. makes the head the new node
    }

    this.tail = newNode; // 2nd. make also the tale point to the very first node because only one node exist
    // 3rd. if you add more to the existing list then you go into the if statement.
  };

  list.removeHead = function() {
    var tempValue = this.head.value;
    this.head = this.head.next;
    return tempValue;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail = O(1) constant time;
removeHead = O(1) constant time;
contains = O(n) linear;
 */
