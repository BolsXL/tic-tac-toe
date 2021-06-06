"use strict";

// MODULES
const gameBoard = (function() {
    // VARIABLES
    const boardArray = [['X', 'X', 'X'], ['O', 'O', 'O'], ['X', 'X', 'X']];

    // FUNCTIONS

    // PUBLIC
    return {
        boardArray: boardArray,
    }
})();

const displayController = (function() {
    // VARIABLES
    const board = document.querySelector('.board');

    // FUNCTIONS
    const displayBoard = () => {
        const arry = gameBoard.boardArray;
        board.innerHTML = `<p><span>${arry[0][0]}</span>` +
                          `<span>${arry[0][1]}</span>` +
                          `<span>${arry[0][2]}</span></p>` +
                          `<p><span>${arry[1][0]}</span>` +
                          `<span>${arry[1][1]}</span>` +
                          `<span>${arry[1][2]}</span></p>` +
                          `<p><span>${arry[2][0]}</span>` +
                          `<span>${arry[2][1]}</span>` +
                          `<span>${arry[2][2]}</span></p>`;
    }

    // PUBLIC
    return {
        displayBoard: displayBoard,
    }
})();

// RUNTIME
displayController.displayBoard();