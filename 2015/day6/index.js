const fs = require('fs');
fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(error); return -1; }
  let lines = data.toString().split('\n');
})