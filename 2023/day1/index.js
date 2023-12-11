const fs = require('fs');
let total = 0;
let linetotal = "";
const numbers = {
  "one": '1',
  "two": '2', 
  "three": '3', 
  "four": '4', 
  "five": '5', 
  "six": '6', 
  "seven": '7', 
  "eight": '8',
  "nine": '9',
}

fs.readFile('./input.txt', (error, data) => {
  if (error) console.error(error);
  lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i++) {
    let chars = (lines[i].match(/((?:\d{1}|one|two|three|four|five|six|seven|eight|nine){1})/g).toString()).split(',')
    if (chars[chars.length - 1] == 'null') {
      chars.pop()
    }
    linetotal = [chars[0], chars[chars.length - 1]]
    if (linetotal[0].length > 1) {
      linetotal[0] = numbers[linetotal[0]];
    }
    if (linetotal[1].length > 1) {
      linetotal[1] = numbers[linetotal[1]];
    }
    linetotal = linetotal[0] + linetotal[1]
    total += parseInt(linetotal);
    console.log(`Line ${i + 1} input: ${lines[i]}`)
    console.log(`Line ${i + 1} chars: ${chars}`);
    console.log(`Line ${i + 1} total: ${linetotal}`);
    console.log(`The total is now ${total}`)
    console.log('----------------------------------')
    linetotal = ""; 
  }
  console.log(`The Calibration Number is ${total}`);
})
