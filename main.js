"use strict";

// MODULES
const gameBoard = (function() {
    // VARIABLES
    const boardArray = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];

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
        gameBoard.boardArray.forEach((e, key) => {
            let newDiv = document.createElement('div');
            newDiv.textContent = String(e);
            newDiv.classList.add(`data-id=${key}`);
            newDiv.addEventListener('click', e => {

            })
            board.appendChild(newDiv);
        });
    }

    // PUBLIC
    return {
        displayBoard: displayBoard,
    }
})();

// FACTORIES
const createPlayer = (name) => {
    return { name, };
};

// RUNTIME
displayController.displayBoard();