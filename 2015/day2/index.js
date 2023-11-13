const fs = require('fs');
const input = fs.readFile('./input.txt', (error, data) => {
  if (error) { console.error(`Line 3 ${error}`); return; }
  let dimensions = data.toString().split('\r\n');
  let paper = 0;
  let ribbon = 0;
  for (let i = 0; i < dimensions.length; i++) {
    let length = dimensions[i].toString().split('x')[0];
    let width = dimensions[i].toString().split('x')[1];
    let height = dimensions[i].toString().split('x')[2];
    let sides = [length*width, width*height, height*length]
    let smallestSide = dimensions[i].toString().split('x').sort((a, b) => a-b)[0];
    let middleSide = dimensions[i].toString().split('x').sort((a, b) => a - b)[1];
    ribbon += ((smallestSide * 2) + (middleSide * 2) + (length*width*height))
    paper += ((2*length*width) + (2*width*height) + (2*height*length)) + Math.min(...sides);
    //surface area = 2*l*w + 2*w*h + 2*h*l
  }
  console.log(`${paper} sqft of paper, ${ribbon} sqft of ribbon`);
});