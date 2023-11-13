const fs = require('fs');
fs.readFile('./input.txt', (error, data) => {
  let floors = 0;
  data = data.toString().split('')
  let basement = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      floors++;
    } else if (data[i] === ")") {
      floors--;
    }
    if (floors == -1 && basement == 0) {
      basement = i + 1;
    }
  }
  console.log(floors, basement);
})