//randomly assign roles on pageload?
let playerOne
let playerTwo
let playOneChoices
let playerTwoChoices
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
        if(clickCounter === 0){
            target.innerText = 'X'
        }else if(clickCounter % 2 === 0 && clickCounter !== 0){
            target.innerText = 'X'
            turn.classList.remove('fa-x')
            turn.classList.add('fa-o')    
        }else{
            target.innerText = 'O'
            turn.classList.remove('fa-o')
            turn.classList.add('fa-x')
        }
        clickCounter++;
        
    }, {once: true})
})

/* const switchTurn = (clickCounter) => {
    const turn = document.getElementById('turn')
    if(clickCounter % 2 === 0){
        turn.classList.add('fa-x')
        turn.classList.remove('fa-o')
    }else{
        turn.classList.remove('fa-x')
        turn.classList.add('fa-o')
    }
} */


//assign the first click to playerOne
//assign second click to playerTwo
//make sure to alternate between clicks;

//winning patterns
const winningPatterns = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
]
//player clicks a box and it pushes that number to an array

