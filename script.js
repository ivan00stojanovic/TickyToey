//randomly assign roles on pageload?
let playerOneChoices = []
let playerTwoChoices = []
let playerOneScore = 0;
let playerTwoScore = 0;
let drawScore = 0;
let clickCounter = 0;
const boxes = document.querySelectorAll('.box')

//add click event to each box
boxes.forEach((box) => {
    box.addEventListener('click', (e)=>{
        const turn = document.getElementById('turn')
        let target = e.target
        console.log(target.id)
        if(clickCounter % 2 === 0){
            target.innerText = 'X'   
            turn.classList.remove('fa-x')
            turn.classList.add('fa-o')
            playerOneChoices.push(Number(target.id))
            

        }else{
            target.innerText = 'O'
            turn.classList.remove('fa-o')
            turn.classList.add('fa-x')
            playerTwoChoices.push(Number(target.id))
            
        }
        clickCounter++;
        if(playerOneChoices.length  >= 3 || playerTwoChoices.length >= 3){
            checkForWinner(playerOneChoices)
            checkForWinner(playerTwoChoices)
            console.log(`player one ${playerOneChoices}`)
            console.log(`player two ${playerTwoChoices}`)
        }/*else if(playerTwoChoices.length  === 3 || playerTwoChoices.length  === 4){
            
            
        }*/
        
        
    }, {once: true})
})



function checkForWinner(arr) {
    const winningPatterns = [
        [1, 2, 3],
        [1, 5, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 5, 7],
        [3, 6, 9],
        [4, 5, 6],
    ]
        let includeCounter = 0;

        for(let i = 0; i < winningPatterns.length; i++){
            for(let j = 0; i <= 2; j++){
               if(arr.includes(winningPatterns[i][j])){
                includeCounter++
                console.log(`include counter is ${includeCounter}`)
                if(includeCounter === 3){
                    console.log('Winner!')
                    alert('Winner')
                }
               }else{
                includeCounter === 0  
                    break;             
               }
            }
        }
        //[1,2.9].includes(winningPatterns[1][2])/
  
}

//assign the first click to playerOne
//assign second click to playerTwo
//make sure to alternate between clicks;

//winning patterns

//player clicks a box and it pushes that number to an array

