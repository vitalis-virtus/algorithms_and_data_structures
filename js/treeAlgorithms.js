const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

// v - value of each node
// c - children of each node

const recursive = (tree) => {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v; // we refresh sum of nodes

    // point of out for recursive func
    if (!node.c) {
      return node.v;
    }

    //we recursively move inside tree
    sum += recursive(node.c);
  });
  return sum;
};

const iteration = (tree) => {
  let sum = 0;
  const stack = [];

  // copy all first-level nodes in stack
  tree.forEach((node) => {
    stack.push(node);
  });

  while (stack.length) {
    const node = stack.pop();
    sum += node.v;

    // if node has child nodes
    // we copy all childNodes in stack
    if (node.c) {
      node.c.forEach((childNode) => {
        stack.push(childNode);
      });
    }
  }
  return sum;
};

console.log(iteration(tree));
console.log(recursive(tree));
