const fs = require('fs');
const md5 = require('./md5');
const input = fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(error); return; }
  let correctHash = false;
  let hash = ""
  let input = data;
  let number = 0;
  for (let i = 1; correctHash == false; i++) {
    input = data + i;
    hash = md5(input);
    if (hash.toString().startsWith("00000")) {
      number = i;
      correctHash = true;
    }
  }
  console.log(`The hash for part one is: ${hash}, which has the number ${number} appended to the input.`);
  correctHash = false;
  for (let i = 1; correctHash == false; i++) {
    input = data + i;
    hash = md5(input);
    if (hash.toString().startsWith("000000")) {
      number = i;
      correctHash = true;
    }
  }
  console.log(`The hash for part two is: ${hash}, which has the number ${number} appended to the input.`);
})