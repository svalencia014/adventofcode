const fs = require('fs');
let x = 0;
let y = 0;
let last = [0,0];
let visited = [];
let houses = 1;
fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(`Line 5: ${error}`); return;}
  let directions = data.toString().split('');
  for (let i = 0; i < directions.length; i++) {
    console.log(directions[i]);
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
    for (const house in visited) {
      console.log(house[0]);
    }
    console.log(visited);
    console.log(`Step ${(i) + 1}: ${[x,y]}`);
    visited.push([x,y]);
    last = [x,y];
  }
  console.log(`Final coordinates: ${[x,y]}`);
  console.log(`Visted ${houses} houses`);
})