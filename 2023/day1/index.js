const fs = require('fs');
let total = 0;
let linetotal = "";
fs.readFile('./input.txt', (error, data) => {
  if (error) console.error(error);
  lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i++) {
    let chars = lines[i].match(/\d/g);
    console.log(`Line ${i + 1} numbers: ${chars}`);
    linetotal += chars[0] + chars[chars.length -1]
    console.log(`Line ${i + 1} total: ${linetotal}`);
    total += parseInt(linetotal);
    linetotal = "";
    console.log(`Calibration number is now: ${total}`);
  }
})
