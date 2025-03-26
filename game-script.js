const rockBt = document.querySelector('.rock')
const paperBt = document.querySelector('.paper')
const scissorsBt = document.querySelector('.scissors')
const resetBt = document.querySelector('.reset')
const showScore = document.querySelector('.score')
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 }
const moves = {
    rock:'✊',
    paper: '🖐',
    scissors: '✌'
}


let computerMove = ''

rockBt.addEventListener('click', () =>{
    computerMoves()
    playerMoves(moves.rock)
})

paperBt.addEventListener('click', () =>{
    computerMoves()
    playerMoves(moves.paper)
})

scissorsBt.addEventListener('click', () =>{
    computerMoves()
    playerMoves(moves.scissors)
})

resetBt.addEventListener('click', () =>{
    score.wins = 0
    score.losses = 0
    score.ties = 0
    showScore.innerHTML = ''
    localStorage.removeItem('score')
})



function computerMoves(){
    const randomNum = Math.random()
    if(randomNum >= 0 && randomNum < 1/3){
        computerMove = moves.rock
    } else if(randomNum >= 1/3 && randomNum < 2/3) {
        computerMove = moves.paper
    } else if(randomNum >= 2/3 && randomNum < 1){
        computerMove = moves.scissors
    }
}

function playerMoves(param){
    result = ''
    if (param === moves.rock){
        if(computerMove === moves.rock){
            result = ' Tie.'
        } else if(computerMove === moves.paper){
            result = ' You lose.'
        } else if(computerMove === moves.scissors){
            result = ' You win.'
        }
    } else if(param === moves.paper){
        if(computerMove === moves.rock){
            result = ' You lose.'
        } else if(computerMove === moves.paper){
            result = ' Tie.'
        } else if(computerMove === moves.scissors){
            result = ' You win.'
        }
    } else {
        if(computerMove === moves.rock){
            result = ' You lose.'
        } else if(computerMove === moves.paper){
            result = ' You win.'
        } else if(computerMove === moves.scissors){
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

    localStorage.setItem('score', JSON.stringify(score))

    showScore.innerHTML = `
    <p>${result}</p>
    <p>You <span style="font-size:2em">${param}</span> vs.<span style="font-size:2em">${computerMove}</span> Computer.</p>
    <p>Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}</p>`
}

