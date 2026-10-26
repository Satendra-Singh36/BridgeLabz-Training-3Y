// "use strict";
// var score = 50;
// let status = "ready";

// function announce() {
//     console.log("Game started");
// }

// function startGame() {
//     console.log(status);
// }

// console.log(score);
// announce();
// startGame();




// Rewrite using arrow functions
"use strict";
let score = 50;
let status = "ready";

const announce = () => console.log("Game started");
const startGame = () => console.log(status);

console.log(score);
announce();
startGame();