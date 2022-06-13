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
    const playerTwo = PlayerFactory('playerTwo', 'O'); 

    let currentPlayer = ['one'];


    ////where should playerToggle reside? this will happen more than once 
    const playerToggle = function() {
        if (currentPlayer.includes('one')) {
            currentPlayer = ['two']     
            
        }   else if (currentPlayer.includes('two')) {
            currentPlayer =['one']
        }
    }

    

    ////GameBoard module...
    const GameBoard = (function() {

        
        let gameBoard = [];
        
        ////creating each cell of gameBoard 
        const GameBoardCell = function(cellNum) {
            return {cellNum}
        }

        ////populating gameBoard with 9 cells total
        for (let i = 0; i<=8; i++) {
            const cell = GameBoardCell(`${i}`)
            gameBoard.push(cell)
        }        

        return {gameBoard}        
        
    })();

  

    ////DisplayController module...
    const DisplayController = (function() {
        const gameBoardDisplay = document.querySelector('.gameBoardDisplay')

        ////associating each 'cell' of gameBoard from `gameBoard` with a div for DOM. add class of `cell` to manipulate in css
        const setUp = (function() {
            // let i = 0;
            for (let element of GameBoard.gameBoard) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                // cell.id = `${i}`;
                // i++;
                gameBoardDisplay.appendChild(cell)
                
                
                
            }

            // gameBoardDisplay.appendChild(GameBoard.gameBoard)

        })();

        return {}
    })();
    
    



    


})();



/*QUESTIONS
1. what should be 'hidden' in GameBoard module within Game? and what's ok to be visible within Game?

2. 

*/
