class Node {
  nodes: Node[];
  val: number;

  constructor(val: number, ...nodes: Node[]) {
    this.val = val;
    this.nodes = nodes;
  }

}



const n = new Node(
  1,
  new Node(2.1),
  new Node(2.2),
  new Node(
    2.3,
    new Node(4),
    new Node(
      5,
      new Node(6.1),
      new Node(6.2),
      new Node(
        6.3,
        new Node(7.1),
        new Node(
          7.2,
          new Node(8)
        )
      ),
      new Node(6.4),
    )
  ),
  new Node(2.4),
);


const run = () => {

  const q = [n];

  while(q.length > 0){

    console.log('len:', q.length);

    const v = q.pop();

    console.log(v.val);

    for(let n of v.nodes){
      q.unshift(n);
    }
  }

};

run();


