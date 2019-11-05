class Node {
  
  parent: Node;
  left: Node;
  right: Node;
  
  constructor(left?: Node, right?: Node) {
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
    
    if (this.parent && this.parent.parent) {
      this.parent = this.parent.parent;
    }
    
    if (this.parent && this.parent.left === this) {
      this.left = this.parent;
      this.parent.left = this.left;
    }
    else if (this.parent && this.parent.right === this) {
      this.right = this.parent;
      this.parent.right = this.right;
    }
    
  }
  
}

export class HeapQueue {
  
  root = new Node();
  
  peek() {
    return this.root;
  }
  
}
