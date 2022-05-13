class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push[v2];
    this.adjacencyList[v2].push[v1];
    return this;
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  depthFirstIterative(start) {
    const result = [];
    const visited = {};
    const stack = [start];
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
      return result;
    }

  }
}

const g = new Graph();
console.log(g.addVertex("Dallas"));
console.log(g.addVertex("Tokyo"));
console.log(g.addVertex("Texas"));
console.log(g.addVertex("Siatto"));
console.log(g.addVertex("Calfornia"));
console.log(g.addEdge("Dallas", "Tokyo"));
console.log(g.addEdge("Tokyo", "Texas"));
console.log(g.addEdge("Texas", "Siatto"));
console.log(g.addEdge("Siatto", "Calfornia"));
console.log(g.removeEdge("Siatto", "Calfornia"));
console.log(g.removeEdge("Siatto", "Calfornia"));
console.log(g.removeVertex("Siatto"));
console.log(g.removeVertex("Calfornia"));
