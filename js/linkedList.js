class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value) {
    // we check for root element
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }

    let node = this.root;

    //linear algorithm to add new node
    // we search last node and rewrite his next
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();

list.add(5);
list.add(2);
list.add(10);

console.log(list.getSize());
list.print();
