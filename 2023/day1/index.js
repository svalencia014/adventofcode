const fs = require('fs');
let total = 0;
let linetotal = "";
const numbers = {
  "two": 2, 
  "three": 3, 
  "four": 4, 
  "five": 5, 
  "six": 6, 
  "seven": 7, 
  "eight": 8,
  "nine": 9
}

fs.readFile('./input.txt', (error, data) => {
  if (error) console.error(error);
  lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i++) {
    let nums = lines[i].match(/\d+/g).split('');
    console.log(`Line ${i + 1} chars: ${lines[i]}`);
    console.log(`Line ${i + 1} nums: ${nums}`);
  }
})
