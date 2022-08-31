const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.h = {};

function shortPath(graph, startPoint, endPoint) {
  const costs = {}; //the table in which we will store the shortest path/mininum costs
  const processed = []; //an array with verified nodes
  let neighbors = {}; //an array with neighboring vertices of the node under consideration

  Object.keys(graph).forEach((node) => {
    if (node !== startPoint) {
      //   we skip the startPoint
      let value = graph[startPoint][node];
      costs[node] = value || 100000000; //added the value of these nodes in which we can get from the starting point
    }
  });

  let node = findLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);

    node = findLowestCost(costs, processed);
  }
  return costs;
}

function findLowestCost(costs, processed) {
  let lowestCost = 10000000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });

  return lowestNode;
}
console.log(shortPath(graph, "a", "g"));
