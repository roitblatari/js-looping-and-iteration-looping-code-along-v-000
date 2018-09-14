// Code your solutions in this file
// const arr = [];
function printBadges(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log( `Welcome ${arr[i]}! You are employee #${ i + 1 }.`);
  }
  return arr;
}

function tailsNeverFails() {
  let tails = 0;
  while (Math.random() >= 0.5) {
    ++tails;
  }
  return `You got ${tails} tails in a row!`;
}
