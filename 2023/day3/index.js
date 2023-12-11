const fs = require('fs');
const symbols = new Set(['*', '#', '+', '$']) //All but period
let sum = 0;

fs.readFile('./input.txt', (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  let lines = data.toString().split('\n');
  //Loop through lines
  for (let y = 0; y < lines.length; y++) {
    const row = lines[y];
    //Loop through characters in line
    for (let x = 0; x < row.length; x++) {
      const char = row[x];
      if (char === '.') continue; //skip periods
      //number check
      if (!isNaN(Number(char))) {
        //Check for symbols in all directions
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= -1; dx++) {
            const newY = y + dy;
            const newX = x + dx;

            //Skip invalid + self check
            if (newY < 0 || newY >= row.length || newX < 0 || newX >= row.length || (dy === 0 && dx === 0)) {
              continue;
            }

            if (symbols.has(lines[newY][newX])) {
              sum += Number(char);
              break; //found symbol, no further checking
            }
          }
        }
      }
    }
    console.log(`The sum is now ${sum}`)
  }
  console.log(`The sum is ${sum}`)
})