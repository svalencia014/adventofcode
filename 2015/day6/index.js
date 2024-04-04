const fs = require('fs');

fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(error); return -1; }
  //Initialize 1000x1000 grid, with x, y, and on properties
  let grid = [];
  for (let i = 0; i < 1000; i++) {
    grid.push([]);
    for (let j = 0; j < 1000; j++) { 
      grid[i].push({ on: false });
    }
  }
  let lines = data.toString().split('\n');
  let instruction_set = [];

  //Parse lines: instruction x,y through x,y
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].split(' ');
    let instruction = line[0];
    if (instruction == 'turn') {
      instruction = line[1];
    }
    let start = line[line.length - 3].split(',');
    let end = line[line.length - 1].split(',');
    instruction_set.push([instruction, start, end]);
  }

  //Execute instructions in order
  for (let i = 0; i < instruction_set.length; i++) {
    let instruction = instruction_set[i][0];
    switch(instruction) {
      case "on": {
        //Turn all lights on in effected grid
        let start = instruction_set[i][1];
        let end = instruction_set[i][2];
        for (let x = start[0]; x < end[0]; x++) {
          for (let y = start[1]; y < end[1]; y++) {
            grid[x][y].on = true;
          }
        }
        break;
      }
      case "toggle": {
        //Toggle the lights in effected grid
        let start = instruction_set[i][1];
        let end = instruction_set[i][2];
        for (let x = start[0]; x < end[0]; x++) {
          for (let y = start[1]; y < end[1]; y++) {
            grid[x][y].on = !grid[x][y].on;
          }
        }
        break;
      }
      case "off": {
        //Turn all lights off in effected grid
        let start = instruction_set[i][1];
        let end = instruction_set[i][2];
        for (let x = start[0]; x < end[0]; x++) {
          for (let y = start[1]; y < end[1]; y++) {
            grid[x][y].on = false;
          }
        }
        break;
      }
    }
  }
  //Count how many are still lit
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j].on) {
        count++;
      }
    }
  }
  console.log(`There are ${count} lights on.`);
})
