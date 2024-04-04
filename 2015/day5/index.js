const fs = require('fs');

fs.readFile('input.txt', (error, data) => {
  let nice = 0;
  let nice_lines = [];
  if (error) {
    console.error(error);
    return;
  }

  let lines = data.toString().split('\n');
  for (let i = 0; i < lines.length; i++) {
    // Character by character testing
    let chars = lines[i].split('');
    let hasDoublePair = false;
    let hasSingleRepeat = false;

    for (let j = 0; j < chars.length - 1; j++) {
      // Check for non-overlapping pair appearing twice
      let pair = chars[j] + chars[j + 1];
      if (lines[i].indexOf(pair, j + 2) !== -1) {
        hasDoublePair = true;
      }

      // Check for single letter between repeat
      if (chars[j] === chars[j + 2]) {
        hasSingleRepeat = true;
      }

      // Early exit if both conditions are met
      if (hasDoublePair && hasSingleRepeat) {
        break;
      }
    }

    if (hasDoublePair && hasSingleRepeat) {
      nice_lines.push(lines[i]);
    }
  }

  console.log(nice_lines);
  console.log(nice_lines.length);
});
