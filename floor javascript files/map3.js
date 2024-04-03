document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();

  // Set the source of the image
  backgroundImage.src = "floor3.jpg"; // Replace with the actual path to your image

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
  graph.addVertex('f_exit1', 383, 377) //fire exit 1
  graph.addVertex('stairs', 598, 455) //stairs
  graph.addVertex('1', 449, 488) 
  graph.addVertex('2', 449, 329)

  //north
  graph.addVertex('technical_section', 98, 191) //Technical Section
  graph.addVertex('301', 295, 223) //Rm301
  graph.addVertex('302', 396, 239) //Rm302
  graph.addVertex('303', 415, 243) //Rm303
  graph.addVertex('304', 488, 257) //Rm304
  graph.addVertex('305', 560, 268) //Rm305
  graph.addVertex('306', 628, 280) //Rm306
  graph.addVertex('307', 718, 293) //Rm307
  graph.addVertex('308', 822, 311) //Rm308
  graph.addVertex('cinema', 860, 338) //Cinema
  graph.addVertex('f_exit3', 560, 268) //Fire Exit 3
  graph.addVertex('shs_lib', 166, 219) //SHS Library
  graph.addVertex('n_toilets', 550, 295) //North Toilets

  //south
  graph.addVertex('college_library', 2844, 456) //College Library
  graph.addVertex('s_toilets', 544, 458) //South Toilets
  graph.addVertex('doit', 598, 458) //DOIT
  graph.addVertex('f_exit4', 640, 458) //Fire Exit 4
  graph.addVertex('310', 754, 455) //Rm310
  graph.addVertex('311', 821, 457) //Rm311
  graph.addVertex('312', 842, 457) //Rm312
  graph.addVertex('313', 882, 457) //Rm313
  graph.addVertex('314', 895, 457) //Rm314
  graph.addVertex('315', 933, 456) //Rm315

  graph.addVertex('316', 306, 480) //Rm316
  graph.addVertex('317', 393, 476) //Rm317
  graph.addVertex('318', 477, 478) //Rm318
  graph.addVertex('319', 546, 478) //Rm319
  graph.addVertex('320', 618, 479) //Rm320

  graph.addVertex('321', 676, 480) //Rm321
  graph.addVertex('322', 747, 480) //Rm322
  graph.addVertex('323', 817, 479) //Rm323
  graph.addVertex('324', 830, 481) //Rm324
  graph.addVertex('325', 901, 480) //Rm325

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

  
  
  