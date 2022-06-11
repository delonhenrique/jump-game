const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const counter = document.querySelector('.counter')
const gameOver = document.querySelector('.game-over')
const playAgain = document.querySelector('.play-again')
const btnRestart = document.querySelector('.restart')

let score = 0
counter.innerHTML = score
let flag = false

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const upScore = () => {
    flag = true
    score = score + 100
    counter.innerHTML = score
    setTimeout(() => {
        flag = false
    },500)
}



const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const cloudsPosition = clouds.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    
    if (pipePosition <= 120 && marioPosition <= 80 && pipePosition > 0) {
    
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        mario.src = './images/mario-lose.webp'
        mario.style.width = '75px'
        mario.style.marginLeft = '58px'

        gameOver.src = './images/game-over.png'
        playAgain.src = './images/play-again.png'
        
        clearInterval(loop)

    } 
        if (pipePosition <= 0) {
            if(!flag)
                upScore()
    }
}, 10)

document.addEventListener('keydown', jump);