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
  graph.addVertex('f_exit1', 353, 322) //fire exit 1
  graph.addVertex('stairs', 598, 455) //stairs
  graph.addVertex('1', 426, 318) //Roof
  graph.addVertex('2', 424, 438)// South Rooms

  graph.addVertex('f_exit2', 1000, 340) //fire exit 2
  graph.addVertex('f_exit3', 575, 437) //fire exit 3
  graph.addVertex('f_exit4', 211, 458) //fire exit 4
  graph.addVertex('f_exit5', 839, 447) //fire exit 5

  graph.addVertex('hardware_lab', 270, 433)// Hardware Lab
  graph.addVertex('n_toilets', 309, 339) //North Toilets
  graph.addVertex('s_toilets', 529, 435) //South Toilets
  graph.addVertex('401', 271, 431) //Rm401
  graph.addVertex('402', 674, 433) //Rm402
  graph.addVertex('403', 728, 428) //Rm403
  graph.addVertex('404', 785, 431) //Rm404
  graph.addVertex('405', 285, 451) //Rm405
  graph.addVertex('406', 358, 451) //Rm406
  graph.addVertex('407', 459, 454) //Rm407
  graph.addVertex('408', 525, 454) //Rm408
  graph.addVertex('409', 591, 453) //Rm409
  graph.addVertex('410', 670, 452) //Rm410
  graph.addVertex('411', 756, 451) //Rm411
  graph.addVertex('ccesc', 804, 426) //CCESC
  graph.addVertex('pe_dept', 831, 428) //PE Department
  graph.addVertex('ilmo', 788, 452) //ILMO
 
//North Edges
graph.addEdge('elevator', '1'); //Elevator to North
graph.addEdge('1','f_exit1'); // North To Fire Exit 1
graph.addEdge('f_exit1','n_toilets'); // Fire Exit 1 to North Toilets
graph.addEdge('1','f_exit2'); // North to Fire Exit 2

// South Edges

graph.addEdge('elevator', '2'); //Elevator to South
graph.addEdge('2', 'hardware_lab'); //South to Hardware Lab
graph.addEdge('hardware_lab', 'f_exit4');// Hardware Lab to Fire Exit 4

graph.addEdge('2', 's_toilets'); // South to South Toilets
graph.addEdge('s_toilets','402' ); //South Toilets to 402 
graph.addEdge('402', '403'); // 402 to 403
graph.addEdge('403', '404'); // 403 to 404
graph.addEdge('404','ccesc' ); //404 to CCESC
graph.addEdge('ccesc','pe_dept' ); //CCESC to PE Department 
graph.addEdge('pe_dept','f_exit5' ); //PE Dept to Fire Exit 5
graph.addEdge('s_toilets','407');
graph.addEdge('s_toilets','408' );
graph.addEdge('s_toilets','409' );
graph.addEdge('s_toilets','410' );
graph.addEdge('402','410');
graph.addEdge('402','409');
graph.addEdge('402','411');
graph.addEdge('403','411');
graph.addEdge('403','ilmo');
graph.addEdge('403','410');

graph.addEdge('ccesc','ilm0' );  
graph.addEdge('pe_dept','ilmo' );

graph.addEdge('407', 'hardware_lab');
graph.addEdge('406', 'hardware_lab');
graph.addEdge('405', 'hardware_lab');
graph.addEdge('f_exit4','405' ); //Fire Exit 4 to 405
graph.addEdge('405', '406'); // 405 to 406
graph.addEdge('406', '407'); // 406 to 407
graph.addEdge('407', '408'); // 407 to 408
graph.addEdge('408', '409'); // 408 to 409
graph.addEdge('409', '410'); // 409 to 410
graph.addEdge('410', '411'); // 410 to 411
graph.addEdge('411','ilmo'); //411 to ILMO
graph.addEdge('ilmo','f_exit5'); //ILMO for Fire Exit 5
graph.addEdge('f_exit5','pe_dept'); //Fire Exit 5 to PE Dept

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

  
  
  