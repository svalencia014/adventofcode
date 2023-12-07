const fs = require('fs');

//* The number of cubes of each color available (part 1)
const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

//* Test result variables
let redTestPass = false;
let greenTestPass = false;
let blueTestPass = false;

//* Minimum cubes needed (part 2)
let minRed = 1;
let minGreen = 1;
let minBlue = 1;

let total = 0;
let min = 0;

fs.readFile('./input.txt', (err, data) => {
  if (err) {
    console.error(err);
    process.exit();
  }
  const input = data.toString().split('\n');
  for (let i = 0; i < input.length; i++) {
    let gameId = parseInt(input[i].toString().match(/\d{1,3}:/g).toString().replace(':', ''));
    let drawnRed = input[i].toString().match(/\d{1,2} red/g).toString().replaceAll(' red', '').split(',');
    for (let j = 0; j < drawnRed.length; j++) {
      console.log(drawnRed[j])
      if (drawnRed[j] > redCubes) {
        console.error(`Game ${gameId} has ${drawnRed[j]} red cubes, which is more than the ${redCubes} available.`);
        redTestPass = false;
        break;
      } else {
        redTestPass = true;
      }
      if (drawnRed[j] > minRed) {
        minRed = drawnRed[j];
        console.log(`The minimum number of red cubes is now ${minRed}`)
      }
    }
    let drawnGreen = input[i].toString().match(/\d{1,2} green/g).toString().replaceAll(' green', '').split(',');
    for (let j = 0; j < drawnGreen.length; j++) {
      if (drawnGreen[j] > greenCubes) {
        console.error(`Game ${gameId} has ${drawnGreen[j]} green cubes, which is more than the ${greenCubes} available.`);
        greenTestPass = false;
        break;
      } else {
        greenTestPass = true;
      }
      if (drawnGreen[i] > minGreen) {
        minGreen = drawnGreen[j];
      }
    }
    let drawnBlue = input[i].toString().match(/\d{1,2} blue/g).toString().replaceAll(' blue', '').split(',');
    for (let j = 0; j < drawnBlue.length; j++) {
      if (drawnBlue[j] > blueCubes) {
        console.error(`Game ${gameId} has ${drawnBlue[j]} blue cubes, which is more than the ${blueCubes} available.`);
        blueTestPass = false;
        break;
      } else {
        blueTestPass = true;
      }
      if (drawnBlue[j] > minBlue) {
        minBlue = drawnBlue[j];
      }
    }
    if (redTestPass && greenTestPass && blueTestPass) {
      console.log(`Game ${gameId} has passed all tests.`);
      total += gameId;
    }
    console.log(`The minimum number of red cubes needed for game ${gameId} is ${minRed}`);
    console.log(`The minimum number of green cubes needed for game ${gameId} is ${minGreen}`);
    console.log(`The minimum number of blue cubes needed for game ${gameId} is ${minBlue}`);
    
    let gameMin = (parseInt(minRed) * parseInt(minGreen)) * parseInt(minBlue);
    console.log(`Game ${gameId} has a minimum of ${gameMin} cubes.`)
    console.log(`Game ${gameId} has an input of ${input[i]}`)
    
    min += gameMin;
    console.log(`The total is now ${total}`);
    console.log(`The min cubes is now ${min}`)
    console.log(`----------------------------------`)

    // Reset min values
    minRed = 1;
    minGreen = 1;
    minBlue = 1;
  }
  console.log(`The total is ${total}`);
  console.log(`The min cubes is ${min}`)
})