const fs = require('fs');
fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(`Line 5: ${error}`); return;}
  let instructions = data.toString().split('');
  // Define starting positions for Santa and Robot Santa
  let santaX = 0;
  let santaY = 0;
  let robotSantaX = 0;
  let robotSantaY = 0;
  
  // Keep track of whose turn it is (true - Santa, false - Robot Santa)
  let santasTurn = true;
  
  // Keep track of visited houses (Set to prevent duplicates)
  let visited = [];
  visited.push([0, 0]); //Starting position

  for (let instruction of instructions) {
    // Move Santa or Robot Santa based on whose turn it is
    if (santasTurn) {
      switch(instruction) {
        case '^':
          santaY++;
          break;
        case 'v':
          santaY--;
          break;
        case '>':
          santaX++;
          break;
        case '<':
          santaX--;
          break;
      }
      visited.push([santaX, santaY]);
      santasTurn = false;
    } else {
      switch(instruction) {
        case '^':
          robotSantaY++;
          break;
        case 'v':
          robotSantaY--;
          break;
        case '>':
          robotSantaX++;
          break;
        case '<':
          robotSantaX--;
          break;
      }
      visited.push([robotSantaX, robotSantaY]);
      santasTurn = true;
      console.log(visited);
    }
    console.log(santaX, santaY, robotSantaX, robotSantaY)
  }

  // Print the final positions of Santa and Robot Santa
  console.log(`Santa: (${santaX}, ${santaY})`);
  console.log(`Robot Santa: (${robotSantaX}, ${robotSantaY})`);
  
  //Print the number of houses visited
  let arr = visited.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse);
  console.log(`Total houses visited: ${arr.length}`);
})