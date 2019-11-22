import * as util from "util";
import * as treeify from 'treeify';

class Node {
  
  parent: Node;
  left: Node;
  right: Node;
  value: number;
  
  constructor(value: number, left?: Node, right?: Node) {
    this.parent = null;
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
  
  getValue() {
    return this.value;
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
    const parent = this.parent;
    this.parent = this.parent.parent;
    parent.parent = this;
    
  }
  
}

export class HeapQueue {
  
  root = new Node(1);
  // foot = this.root;
  
  peek() {
    return this.root;
  }
  
  enq(n: Node) {
    
    let root = this.root;
    
    while (root) {
      if (!(root.left && root.right)) {
        break;
      }
      root = root.left;
    }
    
    if (root.left) {
      root.right = n;
    }
    else {
      root.left = n;
    }
    
    console.log({root});
    n.parent = root;
    
    while (n.parent && n.getValue() < n.parent.getValue()) {
      n.swapWithParent();
    }
    
    if (!n.parent) {
      this.root = n;
    }
    
  }
  
  deq(n: Node) {
  
  }
  
}


//  id =
//  type tv or movie
//

const h = new HeapQueue();
h.enq(new Node(2));
h.enq(new Node(3));
h.enq(new Node(4));
h.enq(new Node(5));
h.enq(new Node(6));
h.enq(new Node(7));
h.enq(new Node(8));
h.enq(new Node(9));
h.enq(new Node(10));
h.enq(new Node(11));
h.enq(new Node(12));
h.enq(new Node(13));
h.enq(new Node(14));



console.log(util.inspect(h, {depth:55, colors: true}));



