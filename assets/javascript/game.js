let topLeft = document.getElementById("top-left");
let topMid = document.getElementById("top-middle");
let topRight = document.getElementById("top-right");
let midLeft = document.getElementById("middle-left");
let midMid = document.getElementById("middle-middle");
let midRight = document.getElementById("middle-right");
let lowLeft = document.getElementById("bottom-left");
let lowMid = document.getElementById("bottom-middle");
let lowRight = document.getElementById("bottom-right");

let pageBoard = //gets whatever letter is typed into each box on the page
    [[topLeft.innerText, topMid.innerText, topRight.innerText],
    [midLeft.innerText, midMid.innerText, midRight.innerText],
    [lowLeft.innerText, lowMid.innerText, lowRight.innerText]];

// let gameBoard =
//     [["none", "none", "none"],
//     ["none", "none", "none"],
//     ["none", "none", "none"]]

let Xturn = true; //set to false when it's O's turn

function squareClick(square) {
    console.log("you clicked " + square);
    switch (square) {
        case "top-left":
            if (topLeft.innerText === "" && Xturn) {
                topLeft.innerText = "X";
                pageBoard[0][0] = "X";
                Xturn = false;
            }
            else if (topLeft.innerText === "" && !Xturn) {
                topLeft.innerText = "O";
                pageBoard[0][0] = "O";
                Xturn = true;
            }
            break;
        case "top-middle":
            if (topMid.innerText === "" && Xturn) {
                topMid.innerText = "X";
                pageBoard[0][1] = "X";
                Xturn = false;
            }
            else if (topMid.innerText === "" && !Xturn) {
                topMid.innerText = "O";
                pageBoard[0][1] = "O";
                Xturn = true;
            }
            break;
        case "top-right":
            if (topRight.innerText === "" && Xturn) {
                topRight.innerText = "X";
                pageBoard[0][2] = "X";
                Xturn = false;
            }
            else if (topRight.innerText === "" && !Xturn) {
                topRight.innerText = "O";
                pageBoard[0][2] = "O";
                Xturn = true;
            }
            break;
        case "middle-left":
            if (midLeft.innerText === "" && Xturn) {
                midLeft.innerText = "X";
                pageBoard[1][0] = "X";
                Xturn = false;
            }
            else if (midLeft.innerText === "" && !Xturn) {
                midLeft.innerText = "O";
                pageBoard[1][0] = "O";
                Xturn = true;
            }
            break;
        case "middle-middle":
            if (midMid.innerText === "" && Xturn) {
                midMid.innerText = "X";
                pageBoard[1][1] = "X";
                Xturn = false;
            }
            else if (midMid.innerText === "" && !Xturn) {
                midMid.innerText = "O";
                pageBoard[1][1] = "O";
                Xturn = true;
            }
            break;
        case "middle-right":
            if (midRight.innerText === "" && Xturn) {
                midRight.innerText = "X";
                pageBoard[1][2] = "X";
                Xturn = false;
            }
            else if (midRight.innerText === "" && !Xturn) {
                midRight.innerText = "O";
                pageBoard[1][2] = "O";
                Xturn = true;
            }
            break;
        case "bottom-left":
            if (lowLeft.innerText === "" && Xturn) {
                lowLeft.innerText = "X";
                pageBoard[2][0] = "X";
                Xturn = false;
            }
            else if (lowLeft.innerText === "" && !Xturn) {
                lowLeft.innerText = "O";
                pageBoard[2][0] = "O";
                Xturn = true;
            }
            break;
        case "bottom-middle":
            if (lowMid.innerText === "" && Xturn) {
                lowMid.innerText = "X";
                pageBoard[2][1] = "X";
                Xturn = false;
            }
            else if (lowMid.innerText === "" && !Xturn) {
                lowMid.innerText = "O";
                pageBoard[2][1] = "O";
                Xturn = true;
            }
            break;
        case "bottom-right":
            if (lowRight.innerText === "" && Xturn) {
                lowRight.innerText = "X";
                pageBoard[2][2] = "X";
                Xturn = false;
            }
            else if (lowRight.innerText === "" && !Xturn) {
                lowRight.innerText = "O";
                pageBoard[2][2] = "O";
                Xturn = true;
            }
            break;
        default:
            console.log("wait I haven't set that one up yet");
    }
}

