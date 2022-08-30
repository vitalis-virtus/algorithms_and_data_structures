const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.h = {};

function shortPath(graph, startPoint, endPoint) {
  const costs = {}; //the table in which we will store the shortest path
  const processed = []; //an array with verified nodes
  const neigbors = []; //an array with neighboring vertices of the node under consideration

  Object.keys(graph).forEach((node) => {
    if (node !== startPoint) {
      let value = graph[startPoint][node];
      costs[node] = value || 100000000;
    }
  });

  let node = findLowestCost(costs, processed);
}

function findLowestCost(costs, processed) {
  let lowestCost = 10000000000;
  let lowestNode;
}
shortPath(graph, "a", "g");
