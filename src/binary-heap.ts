class Node {
  
  parent: Node;
  left: Node;
  right: Node;
  value: number;
  
  constructor(value: number, left?: Node, right?: Node) {
    this.left = left;
    this.right = right;
  }
  
  swapWithLeftChild() {
    this.left.parent = this.parent;
    this.left.left = this;
    this.parent = this.left;
    this.left = this.left.left;
    this.right = this.left.right;
  }
  
  swapWithRightChild() {
    this.right.parent = this.parent;
    this.right.right = this;
    this.parent = this.right;
    this.right = this.right.right;
    this.left = this.right.left;
  }
  
  swapWithParent() {
    
    const right = this.right;
    const left = this.left;
    
    if (this.parent.left === this) {
      this.right = this.parent.right;
      this.left = this.parent;
    }
    else if (this.parent.right === this) {
      this.left = this.parent.left;
      this.right = this.parent;
    }
    
    this.parent.left = left;
    this.parent.right = right;
    this.parent = this.parent.parent;
    
  }
  
}

export class HeapQueue {
  
  root = new Node(1);
  
  peek() {
    return this.root;
  }
  
  enq(n: Node) {
  
  }
  
  deq(n: Node) {
  
  }
  
}
