'use strict'

/*GAME LOGIC



const PlayerFactory = function(){
  //do the factory code here
  //this is not a module, regular 'factory' that I can call over and over 
  playerNumber
  token
  name? (user input)
};

const Game = (function(){
    //contains everything... 'manager' of the game. oversees everything 
    const player1 = PlayerFactory("Player 1", "X");
    const player2 = PlayerFactory("Player 2", "O");

    let currentPlayer

    const Gameboard = (function(){
        // this becomes the gameboard *module*.
    })();
    const DisplayController = (function(){
        // and this becomes the display *module*.
        
    })();
})();

*/

const display = document.querySelector('.display');
const outcome = document.querySelector('.outcome');
const restartButton = document.querySelector('.restart')
let cells;
let currentPlayer = ['one'];

let gameOver = [];

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]   


const PlayerFactory = function(number,token) {

    return {number, token}


}




const Game = (function() {
    const playerOne = PlayerFactory('playerOne', 'X');
    const playerTwo = PlayerFactory('playerTwo', 'X'); 
    let ci


    


})();