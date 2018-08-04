function processData(inputText) {
    const input = inputText.split('\n')
    const numberOfGraphs = input.shift()

    for(let i=0; i<numberOfGraphs; i++) {
      const graphDefinition = input.shift().split(' ')
      const numberVertices = graphDefinition[0]
      const numberEdges = graphDefinition[1]

      const graph = new Graph(numberVertices)

      for(let j=0; j < numberEdges; j++) {
        const edge = input.shift().split(' ')
        graph.addEdge(edge[0] - 1, edge[1] - 1)
      }

      const root = input.shift() - 1
      const res = graph.getShortestReach(root)

      let string = ''
      for(let k=0; k < numberVertices; k++) {
        if(k !== root) {
          string += res[k] + ' '
        }
      }

      console.log(string)
    }
}

class Graph {
    constructor(size){
        this.size = size
        this.adjList = []
        this.edgeLength = 6

        for(let i=0; i < this.size; i++) {
            this.adjList[i] = []
        }
    }

    addEdge(first, second) {
        this.adjList[first].push(second)
        this.adjList[second].push(first)
    }

    getShortestReach(startId) {
        const distances = []
        const queue = []

        for(let i=0; i<this.size; i++) {
            distances.push(-1)
        }
        queue.push(startId)
        distances[startId] = 0

        while(queue.length) {
            const node = queue.pop()
            const edgeList = this.adjList[node]

            edgeList && edgeList.map((neighbor) => {
              if(distances[neighbor] == -1) {
                distances[neighbor] = distances[node] + this.edgeLength
                queue.push(neighbor)
              }
            })
        }
      return distances
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
