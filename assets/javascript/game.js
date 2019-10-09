let topLeft = document.getElementById("top-left");
let topMid = document.getElementById("top-middle");
let topRight = document.getElementById("top-right");
let midLeft = document.getElementById("middle-left");
let midMid = document.getElementById("middle-middle");
let midRight = document.getElementById("middle-right");
let lowLeft = document.getElementById("bottom-left");
let lowMid = document.getElementById("bottom-middle");
let lowRight = document.getElementById("bottom-right");

const pageBoard = //gets whatever letter is typed into each box on the page
[[topLeft.innerText, topMid.innerText, topRight.innerText],
[midLeft.innerText, midMid.innerText, midRight.innerText],
[lowLeft.innerText, lowMid.innerText, lowRight.innerText]];

let gameBoard = 
[["none", "none", "none"],
["none", "none", "none"],
["none", "none", "none"]]

let Xturn = true; //set to false when it's O's turn

function squareClick(square) {
    console.log("you clicked" + square);
}
