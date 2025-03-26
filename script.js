const rockBt = document.querySelector('.rock')
const paperBt = document.querySelector('.paper')
const scissorsBt = document.querySelector('.scissors')
const resetBt = document.querySelector('.reset')
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

let computerMove = ''

rockBt.addEventListener('click', () =>{
    moves()
    playerMove('rock')
})

paperBt.addEventListener('click', () =>{
    moves()
    playerMove('paper')
})

scissorsBt.addEventListener('click', () =>{
    moves()
    playerMove('scissors')
})

resetBt.addEventListener('click', () =>{
    score.wins = 0
    score.losses = 0
    score.ties = 0
})

function moves(){
    const randomNum = Math.random()
    if(randomNum >= 0 && randomNum < 1/3){
        computerMove = 'rock'
    } else if(randomNum >= 1/3 && randomNum < 2/3) {
        computerMove = 'paper'
    } else if(randomNum >= 2/3 && randomNum < 1){
        computerMove = 'scissors'
    }
    console.log(computerMove)
}

function playerMove(param){
    result = ''
    if (param === 'rock'){
        if(computerMove === 'rock'){
            result = ' Tie.'
        } else if(computerMove === 'paper'){
            result = ' You lose.'
        } else if(computerMove === 'scissors'){
            result = ' You win.'
        }
    } else if(param === 'paper'){
        if(computerMove === 'rock'){
            result = ' You lose.'
        } else if(computerMove === 'paper'){
            result = ' Tie.'
        } else if(computerMove === 'scissors'){
            result = ' You win.'
        }
    } else {
        if(computerMove === 'rock'){
            result = ' You lose.'
        } else if(computerMove === 'paper'){
            result = ' You win.'
        } else if(computerMove === 'scissors'){
            result = ' Tie.'
        }
    }

    if(result === ' You win.'){
        score.wins += 1
    } else if (result === ' You lose.'){
        score.losses += 1
    } else if (result === ' Tie.'){
        score.ties += 1
    }
    window.alert(`You picked ${param}. Computer picked ${computerMove}.${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
}


