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


let testing = [1,3,5]

console.log(testing.some(item => item>5.1));




const PlayerFactory = function(number,playerToken) {

    return {number, playerToken}


}



///////////////GameBoard and DisplayController inside Game.... 
const Game = (function() {
    const display = document.querySelector('.display');
    const outcome = document.querySelector('.outcome');
    const restartButton = document.querySelector('.restart')
    let gameOver = [];
    const playerOne = PlayerFactory('playerOne', 'X');
    const playerTwo = PlayerFactory('playerTwo', 'O'); 

    


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
        const GameBoardCell = function(cellNum, playerToken) {
            
            return {cellNum, playerToken}
        }

        ////populating gameBoard with 9 cells total
        for (let i = 0; i<=8; i++) {
            const cell = GameBoardCell(`${i}`)
            gameBoard.push(cell)
        }        

   
        
        
        return {gameBoard}        
        
    })();
    console.log(GameBoard.gameBoard);
    console.log(GameBoard.gameBoard[1].playerToken !== undefined);
    
  
 

    ////DisplayController module...
    const DisplayController = (function() {

        const gameBoardDisplay = document.querySelector('.gameBoardDisplay')


         ////associating each 'cell' of gameBoard from `gameBoard` with a div for DOM. add class of `cell` to add styling in css

        
        for (let i=0; i<=8; i++) {
                        
            let cellDisplay = document.createElement('div');
            cellDisplay.classList.add('cellDisplay');
            cellDisplay.id = `${i}`;
            gameBoardDisplay.appendChild(cellDisplay);
          
            
           
        }

        const cellDisplays = document.querySelectorAll('.cellDisplay')

        for (let cellDisplay of cellDisplays) {
            console.log(cellDisplay);
            
        }

        return {gameBoardDisplay, cellDisplays} 

        
        

    })();

    ////function for clicking each grid/cell of gameBoard 
    const clickCellDisplay = function() {
        console.log(`click event initiating`);
        console.log(this.id);
             

        ////if cell is already clicked on, return
        for (let x of GameBoard.gameBoard) {
            if (this.id === x.cellNum) {                
                if (x.playerToken !== undefined) {
                        console.log(`returning cuz already marked`);
                    
                    
                    return 
                }
            }
        
        }

        ////adding token of player 
        if (currentPlayer.includes('one')) {
            
            for (let x of GameBoard.gameBoard) {
                if (this.id === x.cellNum) {
                    console.log(`adding token for playerOne`);
                    
                    x.playerToken = playerOne.playerToken
                    
                    
                    console.log(x.playerToken ==='X');
                }
            }
            this.textContent = playerOne.playerToken;
            
           
        } else if (currentPlayer.includes('two')) {
            for (let x of GameBoard.gameBoard) {
                if (this.id === x.cellNum) {
                    console.log(`adding token for playerTwo`);
                    
                    x.playerToken = playerTwo.playerToken
                }
            }
            this.textContent = playerTwo.playerToken;
        }


        ////toggle playerToggle after click
        playerToggle();
        console.log(currentPlayer);

    
        

        ////check if there's a winner or if there is a tie
        winnerCheck();
        
        
    }

    for (let cellDisplay of DisplayController.cellDisplays) {
        cellDisplay.addEventListener('click', clickCellDisplay)
    }
    
    

    ////checking to see if next round is valid
    const nextRoundValid = function() {
        let validCheckArray = [];
        for (let item of GameBoard.gameBoard) {
            validCheckArray.push(item.playerToken);                    
        }
        console.log(validCheckArray);
        

        return validCheckArray.some(item => item === undefined) 
            
        
        
    }


    ////Combinations function
    const combinations = (elements) => {
        if (elements.length ===0) return [ [] ];
        const firstEl = elements[0];
        const rest = elements.slice(1);
    
        const combsWithoutFirst = combinations(rest);
        
        const combsWithFirst = [];
    
        combsWithoutFirst.forEach(comb => {
            const combWithFirst = [...comb, firstEl];
            combsWithFirst.push(combWithFirst);
        });
    
        return [...combsWithoutFirst, ...combsWithFirst];
    }


    ////checking for winner
    const winnerCheck = function() {

        let finalArray = [];

        ////from gameBoard array, filter objects that have playerToken
        let arrayForCheckPlayerOne = [];
        let arrayForCheckPlayerTwo = [];
        for (let x of GameBoard.gameBoard) {
            if (x.playerToken === playerOne.playerToken) {
                arrayForCheckPlayerOne.push(x)

            }   else if (x.playerToken === playerTwo.playerToken) {
                arrayForCheckPlayerTwo.push(x)
            }
        }


        ////push object.cellNum into array
        let arrayForCheckPlayerOneCellNum = [];
        for (let x of arrayForCheckPlayerOne) {
            arrayForCheckPlayerOneCellNum.push(Number(x.cellNum))
        }
        let arrayForCheckPlayerTwoCellNum = [];
        for (let x of arrayForCheckPlayerTwo) {
            arrayForCheckPlayerTwoCellNum.push(Number(x.cellNum))
        }


        ////combinationsArrayPlayerOne. all possible combinations, filtered by length 3, then sorted
        let combinationsArrayPlayerOne = (combinations(arrayForCheckPlayerOneCellNum)).filter(item => item.length ===3)
        ////sort by order
        for (let x of combinationsArrayPlayerOne) {
            x.sort();
        }

        let combinationsArrayPlayerTwo = (combinations(arrayForCheckPlayerTwoCellNum)).filter(item => item.length ===3)
        ////sort by order
        for (let item of combinationsArrayPlayerTwo) {
            item.sort();
        }


        ////check if any of combinations is in winningCombinations
        for (let item of combinationsArrayPlayerOne) {
            ////can't compare array to array (will not be 'same' even if they have same values). Need to convert to string to compare
            let itemString = item.toString();
            for (let comb of winningCombinations) {
                if (itemString === comb.toString()) {
                    finalArray.push(playerOne.number)
                    console.log(`playerOne won!`);
                    
                }
            }

        }

        for (let item of combinationsArrayPlayerTwo) {
            ////can't compare array to array (will not be 'same' even if they have same values). Need to convert to string to compare
            let itemString = item.toString();
            for (let comb of winningCombinations) {
                if (itemString === comb.toString()) {
                    finalArray.push(playerTwo.number)
                    console.log(`playerTwo won!`);
                    
                }
            }

        }

        if (finalArray.includes(`${playerOne.number}`)) {
            console.log(`playerOne won confirmation`);
            
            display.style.display = "flex";
            outcome.textContent += `${playerOne.number} won!`
            gameOver.push('x')
            return `${playerOne.number} won!`
        }   else if (finalArray.includes(`${playerTwo.number}`)) {
            display.style.display = "flex";
            outcome.textContent += `${playerTwo.number} won!`
            gameOver.push('x')
            return `${playerTwo.number} wins!`
        }   else if (nextRoundValid() === false)  {
            console.log(`all out of cells`);
            display.style.display = "flex";
            outcome.textContent +="it's a tie!"
            gameOver.push('x')
            return `it's a tie! `
        }




        
        



        
    }




  
    ////making sure that even though Game is a IIFE Module, I can keep using testButton. But why does this work? 
    const testButton = document.querySelector('.testButton')

    const printButt = function() {
        console.log('butt');
        
    }

    testButton.addEventListener(`click`, printButt )


    


    
    // const nextRoundValid = function() {
    //     for (let cell of )
    // }

    return {}
      


})();




////////////////////Game object is outside......

// ////GameBoard module...
// const GameBoard = (function() {
  
//     let gameBoard = [];
    
//     ////creating each cell of gameBoard 
//     const GameBoardCell = function(cellNum, playerToken) {
        
//         return {cellNum, playerToken}
//     }

//     ////populating gameBoard with 9 cells total
//     for (let i = 0; i<=8; i++) {
//         const cell = GameBoardCell(`${i}`)
//         gameBoard.push(cell)
//     }        

    
  
    

//     return {gameBoard}        
    
// })();



// ////DisplayController module...
// const DisplayController = (function() {

//     const gameBoardDisplay = document.querySelector('.gameBoardDisplay')
//         ////associating each 'cell' of gameBoard from `gameBoard` with a div for DOM. add class of `cell` to add styling in css
//     for (let cell of GameBoard.gameBoard) {
//         console.log(cell);
        
//         const cellDisplay = document.createElement('div');
//         cellDisplay.classList.add('cellDisplay');
//         gameBoardDisplay.appendChild(cellDisplay)
        
//     }


//     return {gameBoardDisplay, }
// })();



// ////Game manager object 
// const Game = (function() {
//     const playerOne = PlayerFactory('playerOne', 'X');
//     const playerTwo = PlayerFactory('playerTwo', 'O'); 

//     ////playerToggle will run the first time and switch currentPlayer to 'one' in the beginning
//     let currentPlayer = ['two'];

//     ////where should playerToggle reside? this will happen more than once 
//     const playerToggle = function() {
//         if (currentPlayer.includes('one')) {
//             currentPlayer = ['two']     
            
//         }   else if (currentPlayer.includes('two')) {
//             currentPlayer =['one']
//         }
//     }


//     ////function for clicking each grid/cell of gameBoard 
//     const clickCell = function() {
//         ////if cell is already clicked on, return
//         if (this.playerToken === 'X' || this.playerToken === 'O') {
//             return 
//         }

//         ////adding token of player 
//         if (currentPlayer.includes('one')) {
//             this.playerToken = 'X'
//             this.textContent = 'X'
//         } else if (currentPlayer.includes('two')) {
//             this.playerToken = 'O' 
//             this.textContent = 'O'
//         }


//         ////toggle playerToggle after click
//         playerToggle();

//         ////check if there's a winner or if there is a tie

//         console.log('butt');
        

        
//     }


    
//     // const nextRoundValid = function() {
//     //     for (let cell of )
//     // }

//     return {clickCell}
    



    


// })();



/*QUESTIONS
0. point of having array in gameBoard? could have just used displayController (just work with .textContent to visual DOM elements )

1. what should be 'hidden' in GameBoard module within Game? and what's ok to be visible within Game?
    e.g. playerToggle

2. setUp() function to be inside DisplayController? or just have DisplayController ru


3. testButton... why does this work repetedly when it's inside of Game and Game is a module? 

4. why did I even need playerOne and playerTwo? could have just used gameBoard and displayController and 'printed' results after

*/
