const fs = require('fs');

//Jank sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

fs.readFile('./input.txt', async (error, data) => {
  let nice = 0;
  if (error) { console.error(error); return; }
  const lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/a|e|i|o|u/mg) == null) {
      console.log(`Line ${i + 1} is not nice`)
    } else if (lines[i].match(/a|e|i|o|u/mg).length >= 3) {
      console.log(`Line ${i + 1} has 3 vowels`)
      if (/(?<!\b)(\w)\1(?!\b)/gm.test(lines[i])) {
      console.log(`Line ${i + 1} has a double letter`)
        if (/ab|cd|pq|xy/gm.test(lines[i])) {
          console.log(`Line ${i + 1} is not nice`)
        } else {
          nice++;
        }
      } else {
        console.log(`Line ${i + 1} is not nice`)
      }
    } else {
      console.log(`Line ${i + 1} is not nice`)
    }
    await sleep(250)
  }
  console.log(nice);
});