document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();

  // Set the source of the image
  backgroundImage.src = "2.png"; // Replace with the actual path to your image

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
    backgroundImage.src = "2.png; 

    //console.log(startVertex)
    const graph = new Graph();
  graph.addVertex('elevator', 449, 429) //elevator
  graph.addVertex('f_exit', 383, 377) //fire exit
  graph.addVertex('stairs', 598, 455) //stairs
  graph.addVertex('1', 449, 488) 
  graph.addVertex('2', 449, 329)

  //north
  graph.addVertex('transformer', 102, 211) //Guidance Office
  graph.addVertex('guidance', 132, 230) //Guidance Office
  graph.addVertex('council', 622, 336) //Student Council
  graph.addVertex('n_toilets', 237, 243) //North Toilets
  graph.addVertex('shs_faculty', 304, 278) //SHS Faculty
  graph.addVertex('f_exit2', 196, 232) //Fire Exit Top Left
  graph.addVertex('f_exit3', 968, 380) //Fire Exit Top Right
  graph.addVertex('201', 237, 243) //Rm201
  graph.addVertex('202', 299, 249) //Rm202
  graph.addVertex('203', 350, 260) //Rm203
  graph.addVertex('204', 416, 267) //Rm204
  graph.addVertex('205', 490, 284)//Rm205
  graph.addVertex('206', 559, 298) //Rm206
  graph.addVertex('207', 635, 311) //Rm207
  graph.addVertex('208', 714, 320) //Rm208
  graph.addVertex('209', 818, 336) //Rm209
  graph.addVertex('210', 898, 351)//Rm210
  graph.addVertex('211', 911, 355) //Rm211

//south
  graph.addVertex('math_phys_department', 345, 480) // Math/Physics Faculty
  graph.addVertex('soit_office', 345, 480) // Soit Office
  graph.addVertex('s_toilets', 543, 481) //South Toilets
  graph.addVertex('case_study', 639, 478) //Case Study
  graph.addVertex('f_exit4', 597, 481) //Middle Fire Exit
  graph.addVertex('f_exit5', 248, 498) //Bottom Left Fire Exit
  graph.addVertex('f_exit6', 868, 498) //Bottom Right Fire Exit
  graph.addVertex('n_servers', 900, 498) //network servers
  graph.addVertex('212', 686, 480) //Rm212
  graph.addVertex('213', 764, 478) //Rm213
  graph.addVertex('214', 888, 480)//Rm214
  graph.addVertex('215', 309, 500) //Rm215 / CSA
  graph.addVertex('216', 394, 502) //Rm216
  graph.addVertex('217', 476, 503) //Rm217
  graph.addVertex('218', 547, 502)//Rm218
  graph.addVertex('219', 615, 500) //Rm219 
  graph.addVertex('220', 674, 500) //Rm220
  graph.addVertex('221', 745, 504) //Rm221
  graph.addVertex('222', 814, 504) //Rm222
  graph.addVertex('223', 826, 503) //Rm223

  //north edges
  graph.addEdge('elevator', '2'); //elevator to north

  graph.addEdge('guidance','shs_faculty'); //Guidance to SHS Faculty
  graph.addEdge('shs_faculty','2'); //Faculty to 1 North
  graph.addEdge('2','n_toilets'); //1 to North Toilets
  graph.addEdge('n_toilets','council'); //N toilets To Student Council
  graph.addEdge('shs_faculty','201');//shs faculty to north toilets
  graph.addEdge('n_toilets','206');
  graph.addEdge('n_toilets','207');
  graph.addEdge('council', '208');
  graph.addEdge('council', '207');

  graph.addEdge('transformer','f_exit2'); //Transformer to F_Exit2
  graph.addEdge('transformer','guidance'); //Transformer Guidance
  graph.addEdge('f_exit2','f_201'); //f_exit2 to 201
  graph.addEdge('201', '202'); // 201 to 202
  graph.addEdge('202', '203'); // 202 to 203
  graph.addEdge('2', '204'); // 1 to 204
  graph.addEdge('2', '206'); // 1 to 206
  graph.addEdge('2', 'shs_faculty');
  graph.addEdge('203', '204'); // 203 to 204
  graph.addEdge('204', '205'); // 204 to 205
  graph.addEdge('205', '206'); // 205 to 206
  graph.addEdge('206', '207'); // 206 to 207
  graph.addEdge('207', '208'); // 207 to 208
  graph.addEdge('208', '209'); // 208 to 209
  graph.addEdge('209', '210'); // 209 to 210
  graph.addEdge('210', '211'); // 210 to 211
  graph.addEdge('211', 'f_exit3'); // 211 to F_exit3
  graph.addEdge('council', 'f_exit3'); // 210 to 211
  graph.addEdge('f_exit3','211'); //fire exit 3 to 211


  //south edges
  graph.addEdge('elevator', '1'); //elevator to south
  graph.addEdge('1', 'math_phys_department'); //2 to Math/Physics Department
  graph.addEdge('math_phys_department', 'soit_office'); //math_phys_department to soit
  graph.addEdge('1', 'soit_office');
  graph.addEdge('soit_office', 'f_exit5'); //soit to fire exit 5
  graph.addEdge('f_exit5','215'); //fire exit 5 to 215
  graph.addEdge('215', 'math_phys_department');
  graph.addEdge('215', 'soit_office');
  graph.addEdge('215', '216'); // 215 to 216
  graph.addEdge('216', '217'); // 216 to 217
  graph.addEdge('1', '217'); // 1 to 217
  graph.addEdge('1', '218'); // 1 to 218
  graph.addEdge('217', '218'); // 217 to 218
  graph.addEdge('218', '219'); // 218 to 219
  graph.addEdge('219', '220'); // 219 to 220
  graph.addEdge('220', '221'); // 220 to 221
  graph.addEdge('221', '222'); // 221 to 222
  graph.addEdge('222', '223'); // 222 to 223
  graph.addEdge('223', 'f_exit6'); // 223 to f_exit 6

  graph.addEdge('1', 's_toilets');//1 to south toilets
  graph.addEdge('218', 's_toilets');
  graph.addEdge('219', 's_toilets');
  graph.addEdge('s_toilets', 'case_study');// south toilets to case study
  graph.addEdge('219', 'case_study');
  graph.addEdge('220', 'case_study');
  graph.addEdge('case_Study', '212');// case study to 212
  graph.addEdge('212', '213'); // 212 to 213
  graph.addEdge('212', '221');
  graph.addEdge('212', '222');
  graph.addEdge('212', '223');
  graph.addEdge('213', '221');
  graph.addEdge('213', '222');
  graph.addEdge('213', '223');
  graph.addEdge('213', '214'); // 213 to 214
  graph.addEdge('214', 'f_exit6'); //214 to fire exit 6
  graph.addEdge('f_exit6', 'n_servers'); //fire exit 6 to servers
  graph.addEdge('n_servers','214');// servers to 214


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

  
  
  