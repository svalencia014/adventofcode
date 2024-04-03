const fs = require('fs');
let x = 0;
let y = 0;
let last = false;
let visited = [];
let houses = 0;
fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(`Line 5: ${error}`); return;}
  let directions = data.toString().split('');
  for (let i = 0; i < directions.length; i++) {
    switch(directions[i]) {
      case '^': {
        y++
        break;
      };
      case 'v': {
        y--;
        break;
      }
      case '>': {
        x++;
        break;
      }
      case '<': {
        x--;
        break;
      }
    }
    for (let j = 0; j < visited.length; j++) {
      if (visited[j][0] == x && visited[j][1] == y) {
        last = true;
        break;
      } 
    }
    if (last != true) {
      houses++
    }
    last = false;
    visited.push([x,y]);
    console.log(`${i/directions.length * 100}% complete`)
  }
  console.log(`Final coordinates: ${[x,y]}`);
  console.log(`Visted ${houses} houses`);
})