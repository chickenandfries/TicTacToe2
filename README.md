# TicTacToe2



/*GAME LOGIC


Would you like to play tic tac?
    yes: run setUp function 
    no: 'see you later!'


setting up factory function
1. let gameBoard = []; 
2. const cell = () => {
    return 
}
3. create cells grid 9x9
4. push cells to gameBoard


setUp
    playerSetUp()
        player one name=
        player two name=


    clear board 
    
    set up grid 9x9 
        add button for each grid
            add id using counter for each button 



togglePlayer
    (player 1 goes first, next is 2nd then next is 1st)
    

nextRoundValid
    if at least one grid.textContent ===''
        continue


clickCell
    check cell isn't already marked (class)

    button.addEventListener('click', function() {
        add Class of playerX to button (playerOneMark)
    })

    if (nextRoundValid()) {
        togglePlayer()
    }   else {
        winnerCheck()
    }

    

    


winnerCheck
arrayForCheck = [filter items that have playerOneMark]
arrayForCheckById = [make array with Number(id.textContent)]
combinationArray = combination Arrays all possible combinations, then filter by length 3  
check if any of the combinations is in winningCombinations 
    for (let x of combinationArray)
        if x in combinationArray in winningCombinations
            player one wins 
        else if ....
            player two wins
        else...
            it's a tie! 


            





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


    
    




playRound
    playerUpToggle()

    NextRoundValid()
    
    display 'player x' is up 

    playerInput()

    
  


playing: 



display 'player 1 is up'  
player 1 picks spot (button?) and inputs mark (X)
    if grid.textContent === '' (empty)
        grid is filled up(textContent)
    elseif 'there is already a mark here!' 

display 'player 2 is up' 
player 2 picks spot and inputs mark (O)
    if grid.textContent === '' (empty)
        grid is filled up(textContent)
    elseif 'there is already a mark here!
    
    


display 'player 2 is up'




*/



// const Player = () => {
     
// }




// let array = ["banana", "apple" , "lemon", "mango"];
// let results = [];
// for (let j = 0; j &lt; array.length - 1; j++) {
//  // This is where you'll capture that last value
//  for (let k = j + 1; j &lt; array.length; k++) {
//   results.push(`${array[j]} ${array[k]}`);
//  }
// }
// console.log(results); 
