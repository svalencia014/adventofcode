const fs = require('fs');

fs.readFile('./input.txt', (error, data) => {
  if (error) {
    console.error(error);
    process.exit();
  }
  partOne(data.toString().split('\n'));
  partTwo(data.toString().split('\n'));
})
function isDigit(char) {
  return /^\d$/.test(char);
}
function partOne(data) {
  let sum = 0;
  for (const line of data) {
    let firstNum, lastNum;
    for (const c of line) {
      if (isDigit(c)) {
        if (!firstNum) {
          firstNum = c;
        }
        lastNum = c;
      }
    }
    const twoDigit = `${firstNum}${lastNum}`;
    console.log(twoDigit);
    sum += Number(twoDigit);
  }
  console.log(`Part 1 sum: ${sum}`)
}

function partTwo(data) {
  let sum = 0;
  for (const line of data) {
    let digits = [];
    for (let i = 0; i < line.length; i++)
  }
}