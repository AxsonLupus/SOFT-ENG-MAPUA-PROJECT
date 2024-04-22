document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();

  // Set the source of the image
  backgroundImage.src = "pic1.png"; // Replace with the actual path to your image

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
          const currentVertex = path[path.length - 1]; //reduces the path.length by one for every node passed

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

    startVertex = document.getElementById('initialLocationBookmark').value;
    endVertex = document.getElementById('desiredLocationBookmark').value;
    var backgroundImage = new Image();
    backgroundImage.src = "pic1.png"; 

    //NODES COORDINATES
    const graph = new Graph();
  graph.addVertex('Elevator Lobby', 302, 342) //elevator
  graph.addVertex('Canteen', 200, 235)
  graph.addVertex('Book Store', 110, 410)
  graph.addVertex('Admin Assist', 965, 341)
  graph.addVertex('Admin Office', 965, 400)
  graph.addVertex('Clinic', 250, 382)
  graph.addVertex('Lobby Area', 385,408)
  graph.addVertex('Student Lounge 1', 569, 331)
  graph.addVertex('Student Lounge 2', 302, 235)
  graph.addVertex('Hallway', 415, 235)
  graph.addVertex('Orientation Room', 881, 194)
  graph.addVertex('Nursing Lab', 736,177)
  graph.addVertex('Student Council', 675, 290)
  graph.addVertex('SOCIP', 832, 290)
  graph.addVertex('Registrar', 767, 370)
  graph.addVertex('Treasury', 852, 408)
  graph.addVertex('Waiting Area', 767, 408)
  graph.addVertex('Admission', 852, 370)
  graph.addVertex('Multi Purpose', 993, 194)
  graph.addVertex('Tech Room', 1030, 194)
  
  
  
  //Outside Rooms
  graph.addVertex('Admin_Out1', 936, 296)
  graph.addVertex('Admin_Out2', 963, 296)
  graph.addVertex('Admin_Out3', 963, 235)
  graph.addVertex('Admin Assist_Out', 936, 341)
  graph.addVertex('Admin Office_Out', 936, 400)
  graph.addVertex('Outside', 302, 483)
  graph.addVertex('Bookstore_Out', 110, 483)
  graph.addVertex('Tech Room_Out', 1030, 235)
  graph.addVertex('Multi Purpose_Out', 993, 235)
  graph.addVertex('Orientation Room_Out', 881, 235)
  graph.addVertex('Nursing Lab_Out', 736,235)
  graph.addVertex('Lobby Area_Right', 569,408)
  graph.addVertex('Lobby Area_Left', 302,408)
  graph.addVertex('Clinic_Out', 302, 382)
  graph.addVertex('SOCIP_Out', 832, 235)
  graph.addVertex('Student Council_Out', 675, 235)
  graph.addVertex('Back Lounge', 569, 235)
  
  

  
  
  //DRAWS LINES FROM A NODE TO THEIR NEAREST NEIGHBOURING NODES
  graph.addEdge('Admin_Out1', 'Admin Assist_Out');
  graph.addEdge('Admin_Out1', 'Admin_Out2');
  graph.addEdge('Admin_Out3', 'Admin_Out2');
  graph.addEdge('Admin_Out3', 'Multi Purpose_Out');
  graph.addEdge('Admin_Out3', 'Orientation Room_Out');
  graph.addEdge('Admin Office_Out', 'Admin Assist_Out');
  graph.addEdge('Admin Assist', 'Admin Assist_Out');
  graph.addEdge('Admin Office_Out', 'Admin Office');
  graph.addEdge('Elevator Lobby', 'Student Lounge 2');
  graph.addEdge('Elevator Lobby', 'Lobby Area_Left');
  graph.addEdge('Canteen', 'Student Lounge 2');
  graph.addEdge('Clinic', 'Clinic_Out');
  graph.addEdge('Lobby Area_Left', 'Clinic_Out');
  graph.addEdge('Elevator Lobby', 'Clinic_Out');
  graph.addEdge('Lobby Area_Left', 'Lobby Area');
  graph.addEdge('Bookstore_Out', 'Book Store');
  graph.addEdge('Bookstore_Out', 'Outside');
  graph.addEdge('Waiting Area', 'Lobby Area_Right');
  graph.addEdge('Waiting Area', 'Registrar');
  graph.addEdge('Waiting Area', 'Treasury');
  graph.addEdge('Waiting Area', 'Admission');
  graph.addEdge('Lobby Area_Left', 'Outside');
  graph.addEdge('Lobby Area_Right', 'Student Lounge 1');
  graph.addEdge('Lobby Area_Right', 'Lobby Area');
  graph.addEdge('Nursing Lab', 'Nursing Lab_Out');
  graph.addEdge('Tech Room', 'Tech Room_Out');
  graph.addEdge('Back Lounge', 'Student Lounge 1');
  graph.addEdge('Hallway', 'Student Lounge 2');
  graph.addEdge('Hallway', 'Back Lounge');
  graph.addEdge('Student Council_Out', 'Nursing Lab_Out');
  graph.addEdge('Student Council_Out', 'Back Lounge');
  graph.addEdge('Student Council_Out', 'Student Council');
  graph.addEdge('SOCIP_Out', 'SOCIP');
  graph.addEdge('SOCIP_Out', 'Nursing Lab_Out');
  graph.addEdge('SOCIP_Out', 'Orientation Room_Out');
  graph.addEdge('Tech Room_Out', 'Multi Purpose_Out');
  graph.addEdge('Multi Purpose', 'Multi Purpose_Out');
  graph.addEdge('Orientation Room', 'Orientation Room_Out');
  graph.addEdge('Multi Purpose_Out', 'Orientation Room_Out');
  graph.addEdge('Treasury', 'Admission');
  graph.addEdge('Registrar', 'Admission');
  

  const shortestPath = graph.bfs(startVertex, endVertex);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');


  // Clear the canvas
  //
  
  
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

  
  
  
