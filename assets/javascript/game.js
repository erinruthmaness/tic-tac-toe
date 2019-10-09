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

let Xturn = true; //set to false when it's O's turn
let gameOver = false;

function squareClick(square) {
    console.log("you clicked " + square);
    if (!gameOver) {
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
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
                findWin();
                break;
            default:
                console.log("invalid click");
        }
    } else {
        console.log("game over!");
    }
}

function findWin() {
    //check for horizontal wins
    if (((pageBoard[0][0] === "X") && (pageBoard[0][1] === "X") && (pageBoard[0][2] === "X"))
        || ((pageBoard[1][0] === "X") && (pageBoard[1][1] === "X") && (pageBoard[1][2] === "X"))
        || ((pageBoard[2][0] === "X") && (pageBoard[2][1] === "X") && (pageBoard[2][2] === "X"))) {
        console.log("X wins!");
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[0][1] === "O") && (pageBoard[0][2] === "O"))
        || ((pageBoard[1][0] === "O") && (pageBoard[1][1] === "O") && (pageBoard[1][2] === "O"))
        || ((pageBoard[2][0] === "O") && (pageBoard[2][1] === "O") && (pageBoard[2][2] === "O"))) {
        console.log("O wins!");
        gameOver = true;
    }
    //check for vertical wins    
    else if (((pageBoard[0][0] === "X") && (pageBoard[1][0] === "X") && (pageBoard[2][0] === "X"))
        || ((pageBoard[0][1] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][1] === "X"))
        || ((pageBoard[0][2] === "X") && (pageBoard[1][2] === "X") && (pageBoard[2][2] === "X"))) {
        console.log("X wins!");
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[1][0] === "O") && (pageBoard[2][0] === "O"))
        || ((pageBoard[0][1] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][1] === "O"))
        || ((pageBoard[0][2] === "O") && (pageBoard[1][2] === "O") && (pageBoard[2][2] === "O"))) {
        console.log("O wins!");
        gameOver = true;
    }
    //check for diagonal wins
    else if (((pageBoard[0][0] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][2] === "X"))
    || ((pageBoard[0][2] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][0] === "X"))){
        console.log("X wins!");
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][2] === "O"))
    || ((pageBoard[0][2] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][0] === "O"))) {
        console.log("O wins!");
        gameOver = true;
    }
}

function resetGame() {
    gameOver = false;
    for (let i = 0; i < pageBoard.length; i++) {
        for (let j = 0; j < pageBoard[i].length; j++) {
            pageBoard[i][j] = "";
        }
    }
    topLeft.innerText = "";
    topMid.innerText = "";
    topRight.innerText = "";
    midLeft.innerText  = "";
    midMid.innerText  = "";
    midRight.innerText  = "";
    lowLeft.innerText  = "";
    lowMid.innerText  = "";
    lowRight.innerText  = "";
}