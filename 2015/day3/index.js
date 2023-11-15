const fs = require('fs');
let houses = 1;
let last = '';
const input = fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(`Line 5: ${error}`); return;}
  let directions = data.toString().split('');
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] == '^') {
      if (last == 'v') {
        return;
      } else {
        houses ++;
      }
      last = directions[i];
    } else if (directions[i] == 'v') {
      if (last == '^') {
        return;
      } else {
        houses ++;
      }
      last = directions[i];
    } else if (directions[i] == '<') {
      if (last == '>') {
        return;
      } else {
        houses ++;
      }
      last = directions[i];
    } else if (directions[i] == '>') {
      if (last == '<') {
        return;
      } else {
        houses ++;
      }
      last = directions[i];
    }
    if (i === directions.length - 1) {
      houses--;
    }
    console.log(houses);
  }
  console.log(houses);
})