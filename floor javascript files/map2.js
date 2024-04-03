document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();

  // Set the source of the image
  backgroundImage.src = "floor2.jpg"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage.onload = function () {
        // Set the canvas size to match the desired image size
        canvas.width = 1073;
        canvas.height = 595;

        // Draw the image on the canvas with the specified size
        ctx.drawImage(backgroundImage, 0, 0, 1073, 595);
    };
});

class Graph {
  constructor() {
      this.vertices = new Map();
  }

  addVertex(id, x, y) {
      if (!this.vertices.has(id)) {
          this.vertices.set(id, { id, x, y, neighbors: [] });
      }
  }

  addEdge(vertex1Id, vertex2Id) {
      const vertex1 = this.vertices.get(vertex1Id);
      const vertex2 = this.vertices.get(vertex2Id);

      if (!vertex1 || !vertex2) {
          console.error("One or more vertices not found!");
          return;
      }

      vertex1.neighbors.push(vertex2);
      vertex2.neighbors.push(vertex1); // for undirected graph
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex = path[path.length - 1];

          if (visited.has(currentVertex.id)) {
              continue;
          }

          visited.add(currentVertex.id);

          const neighbors = currentVertex.neighbors;

          for (const neighbor of neighbors) {
              const newPath = [...path, neighbor];

              if (neighbor.id === endVertexId) {
                  return newPath;
              } else {
                  queue.push(newPath);
              }
          }
      }

      return null; // If no path is found
  }
}




  
  function findShortestPath() {

    startVertex = document.getElementById('initial').value;
    endVertex = document.getElementById('final').value;
    var backgroundImage = new Image();
    backgroundImage.src = "floor1.jpg"; 

    //console.log(startVertex)
    const graph = new Graph();
  graph.addVertex('elevator', 449, 429) //elevator
  graph.addVertex('f_exit', 383, 377) //fire exit
  graph.addVertex('stairs', 598, 455) //stairs
  graph.addVertex('1', 449, 488) 
  graph.addVertex('2', 449, 329)

  //north
  graph.addVertex('guidance', 132, 230) //Guidance Office
  graph.addVertex('council', 622, 336) //Student Council
  graph.addVertex('n_toilets', 237, 243) //North Toilets
  graph.addVertex('shs_faculty', 304, 278) //SHS Faculty
  graph.addVertex('201', 237, 243) //Rm201
  graph.addVertex('202', 299, 249) //Rm202
  graph.addVertex('203', 350, 260) //Rm203
  graph.addVertex('204', 416, 267) //Rm204
  graph.addVertex('205', 490, 284) //Rm205
  graph.addVertex('206', 559, 298) //Rm206
  graph.addVertex('207', 635, 311) //Rm207
  graph.addVertex('208', 714, 320) //Rm208
  graph.addVertex('209', 818, 336) //Rm209
  graph.addVertex('210', 898, 351) //Rm210
  graph.addVertex('211', 911, 355) //Rm211

//south
  graph.addVertex('math_phys_department', 345, 480) // Math/Physics Faculty
  graph.addVertex('s_toilets', 543, 481) //South Toilets
  graph.addVertex('case_study', 639, 478) //Case Study
  graph.addVertex('212', 686, 480) //Rm212
  graph.addVertex('213', 764, 478) //Rm213
  graph.addVertex('214', 888, 480) //Rm214
  graph.addVertex('215', 309, 500) //Rm215 / CSA
  graph.addVertex('216', 394, 502) //Rm216
  graph.addVertex('217', 476, 503) //Rm217
  graph.addVertex('218', 547, 502) //Rm218
  graph.addVertex('219', 615, 500) //Rm219 
  graph.addVertex('220', 674, 500) //Rm220
  graph.addVertex('221', 745, 504) //Rm221
  graph.addVertex('222', 814, 504) //Rm222
  graph.addVertex('223', 826, 503) //Rm223


  const shortestPath = graph.bfs(startVertex, endVertex);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath.join(' -> ')}`);

    // Draw the image on the canvas
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Set the line color
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath.length - 1; i++) {
        const currentVertex = shortestPath[i];
        const nextVertex = shortestPath[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx.beginPath();
        ctx.moveTo(currentVertex.x, currentVertex.y);
        ctx.lineTo(nextVertex.x, nextVertex.y);
        ctx.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }

  
  
  