const graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadthSearch(graph, startPoint, endPoint) {
  let queue = []; // stack
  queue.push(startPoint);
  while (queue.length > 0) {
    const current = queue.shift(); //we get start point
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(endPoint)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, "a", "s"));
