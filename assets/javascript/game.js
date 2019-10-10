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
let compGame = false; //set to true if playComp gets clicked
let gameOver = false;
let isItCat = false;

function compClicked() {
    compGame = true;
    document.getElementById("game-status").innerText = "You're playing the computer";
}

function squareClick(square) { //when a square gets clicked an X or O appears
    console.log("you clicked " + square);
    if (!gameOver) {
        switch (square) {
            case "top-left":
                if (topLeft.innerText === "" && Xturn) {
                    pageBoard[0][0] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (topLeft.innerText === "" && !Xturn && !compGame) {
                    pageBoard[0][0] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "top-middle":
                if (topMid.innerText === "" && Xturn) {
                    pageBoard[0][1] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (topMid.innerText === "" && !Xturn && !compGame) {
                    pageBoard[0][1] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "top-right":
                if (topRight.innerText === "" && Xturn) {
                    pageBoard[0][2] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (topRight.innerText === "" && !Xturn && !compGame) {
                    pageBoard[0][2] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "middle-left":
                if (midLeft.innerText === "" && Xturn) {
                    pageBoard[1][0] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (midLeft.innerText === "" && !Xturn && !compGame) {
                    pageBoard[1][0] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "middle-middle":
                if (midMid.innerText === "" && Xturn) {
                    pageBoard[1][1] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (midMid.innerText === "" && !Xturn && !compGame) {
                    pageBoard[1][1] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "middle-right":
                if (midRight.innerText === "" && Xturn) {
                    pageBoard[1][2] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (midRight.innerText === "" && !Xturn && !compGame) {
                    pageBoard[1][2] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "bottom-left":
                if (lowLeft.innerText === "" && Xturn) {
                    pageBoard[2][0] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (lowLeft.innerText === "" && !Xturn && !compGame) {
                    pageBoard[2][0] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "bottom-middle":
                if (lowMid.innerText === "" && Xturn) {
                    pageBoard[2][1] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (lowMid.innerText === "" && !Xturn && !compGame) {
                    pageBoard[2][1] = "O";
                    boardCompare();
                    Xturn = true;
                }
                break;
            case "bottom-right":
                if (lowRight.innerText === "" && Xturn) {
                    pageBoard[2][2] = "X";
                    boardCompare();
                    Xturn = false;
                    if (compGame) {
                        compTurn();
                    }
                }
                else if (lowRight.innerText === "" && !Xturn && !compGame) {
                    pageBoard[2][2] = "O";
                    boardCompare();
                    Xturn = true;
                }
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
        document.getElementById("game-status").innerText = "X wins!";
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[0][1] === "O") && (pageBoard[0][2] === "O"))
        || ((pageBoard[1][0] === "O") && (pageBoard[1][1] === "O") && (pageBoard[1][2] === "O"))
        || ((pageBoard[2][0] === "O") && (pageBoard[2][1] === "O") && (pageBoard[2][2] === "O"))) {
        document.getElementById("game-status").innerText = "O wins!";
        gameOver = true;
    }
    //check for vertical wins    
    else if (((pageBoard[0][0] === "X") && (pageBoard[1][0] === "X") && (pageBoard[2][0] === "X"))
        || ((pageBoard[0][1] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][1] === "X"))
        || ((pageBoard[0][2] === "X") && (pageBoard[1][2] === "X") && (pageBoard[2][2] === "X"))) {
        document.getElementById("game-status").innerText = "X wins!";
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[1][0] === "O") && (pageBoard[2][0] === "O"))
        || ((pageBoard[0][1] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][1] === "O"))
        || ((pageBoard[0][2] === "O") && (pageBoard[1][2] === "O") && (pageBoard[2][2] === "O"))) {
        document.getElementById("game-status").innerText = "O wins!";
        gameOver = true;
    }
    //check for diagonal wins
    else if (((pageBoard[0][0] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][2] === "X"))
        || ((pageBoard[0][2] === "X") && (pageBoard[1][1] === "X") && (pageBoard[2][0] === "X"))) {
        document.getElementById("game-status").innerText = "X wins!";
        gameOver = true;
    }
    else if (((pageBoard[0][0] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][2] === "O"))
        || ((pageBoard[0][2] === "O") && (pageBoard[1][1] === "O") && (pageBoard[2][0] === "O"))) {
        document.getElementById("game-status").innerText = "O wins!";
        gameOver = true;
    }
    //check for cat game
    else {
        catCheck();
    }
}

function catCheck() {
    isItCat = true;
    for (let i = 0; i < pageBoard.length; i++) {
        for (let j = 0; j < pageBoard[i].length; j++) {
            if (pageBoard[i][j] === "") {
                isItCat = false;
            }
        }
    }
    if (isItCat) {
        document.getElementById("game-status").innerText = "Cat game!";
        gameOver = true;
    }
}

function boardCompare() {
    topLeft.innerText = pageBoard[0][0];
    topMid.innerText = pageBoard[0][1];
    topRight.innerText = pageBoard[0][2];
    midLeft.innerText = pageBoard[1][0];
    midMid.innerText = pageBoard[1][1];
    midRight.innerText = pageBoard[1][2];
    lowLeft.innerText = pageBoard[2][0];
    lowMid.innerText = pageBoard[2][1];
    lowRight.innerText = pageBoard[2][2];
    findWin();
}

function resetGame() {
    gameOver = false;
    compGame = false;
    Xturn = true;
    for (let i = 0; i < pageBoard.length; i++) {
        for (let j = 0; j < pageBoard[i].length; j++) {
            pageBoard[i][j] = "";
        }
    }
    boardCompare();
    document.getElementById("game-status").innerText = "";

}

function compTurn() {
    if (!gameOver) {
        smartMove();
        setTimeout(function () { boardCompare(); }, 1000)
        Xturn = true;
    }
}

function findRandom() {
    console.log("find random!");
    let row = Math.floor(Math.random() * Math.floor(3));
    let column = Math.floor(Math.random() * Math.floor(3));
    if (pageBoard[row][column] === "") {
        pageBoard[row][column] = "O";
    } else {
        findRandom();
    }
}

function smartMove() {
    //checks one row at a time & stops X from going straight across
    for (let i = 0; i < pageBoard.length; i++) {
        if (pageBoard[i][1] === "X" && pageBoard[i][0] === "X" && pageBoard[i][2] === "") {
            pageBoard[i][2] = "O";
            console.log("they tried it on row " + i)
            return;
        } else if (pageBoard[i][1] === "X" && pageBoard[i][0] === "" && pageBoard[i][2] === "X") {
            pageBoard[i][0] = "O";
            console.log("they tried it on row " + i)
            return;
        }
        //also checks if O can win
        else if (pageBoard[i][1] === "O" && pageBoard[i][0] === "O" && pageBoard[i][2] === "") {
            pageBoard[i][2] = "O";
            console.log("kicked ass on row " + i)
            return;
        } else if (pageBoard[i][1] === "O" && pageBoard[i][0] === "" && pageBoard[i][2] === "O") {
            pageBoard[i][0] = "O";
            console.log("kicked ass on row " + i)
            return;
        }

    }
    //coming soon: stop X from going straight down

    //if nothing has made it return yet, call findRandom();
    findRandom();
}