import playerFactory from "./modules/playerFactory";
import {renderBoard, renderShips, renderShot, renderGameOver} from './render'
import './styles.css';
import './assets/asset'


const initGame = (() => {

let Player1;
let CPU;
let i;
let axis;
let root = document.documentElement;
const body = document.querySelector('body')

const newGame = document.querySelector('.new-game')
newGame.addEventListener('click', gameStart)

function gameStart() {
    Player1 = new playerFactory('Player1')
    CPU = new playerFactory('CPU')
    i = 0
    axis = 0
    Player1.gameBoard.makeBoard();
    Player1.createShips()
    renderBoard('p1board', Player1);
    createRotateButton(body)
    appendListenerP1()
    hoverStyle(axis)
    newGame.style.display = "none"
}


function createRotateButton(element) {
    const rotate = document.createElement('button')
    rotate.classList.add('rotate')
    rotate.textContent = "Rotate"
    rotate.addEventListener('click', changeAxis)
    element.appendChild(rotate)
}

function changeAxis() {
    //0 for x axis, 1 for y axis
    if (axis === 0) {
        axis = 1
        hoverStyle(axis)
    } else {
        axis = 0
        hoverStyle(axis)
    }
}

function hoverStyle(axis) {
    if (axis === 0) {
        root.style.setProperty('--ship-width', 50 * Player1.ships[i].length + "px")
        root.style.setProperty('--ship-height', 50 + "px")
    } else {
        root.style.setProperty('--ship-width', 50 + 'px')
        root.style.setProperty('--ship-height', 50 * Player1.ships[i].length + "px")
    }
}


function placeShip(e) {
    let location = parseInt(e.target.dataset.indexNumber)
    Player1.ships[i].setCoords(location, axis)
    let check = Player1.gameBoard.setShip(Player1.ships[i])
    if (check === false) {
        return
    }
    renderShips('.p1board', Player1)
    i++
    if (i === 5) {
        const rotate = document.querySelector('.rotate')
        rotate.remove()
        root.style.setProperty('--ship-width', 0 +"px")
        root.style.setProperty('--ship-height', 0 + "px")
        let board = document.querySelector('.p1board')
        board.childNodes.forEach(cell => cell.removeEventListener('click', placeShip))
        CPU.gameBoard.makeBoard()
        CPU.createShips()
        placeCPUShips(CPU)
        renderBoard('cpuboard', CPU);
        appendListenerCPU()
    } else {
        hoverStyle(axis)
    }
}

function placeCPUShips(CPU) {
    for (let i = 0; i < 5; i++) {
        let randomAxis = Math.round(Math.random())
        let random = Math.floor(Math.random() * 99)
        CPU.ships[i].setCoords(random, randomAxis)
        let check = CPU.gameBoard.setShip(CPU.ships[i])
        while (check === false) {
            random = Math.floor(Math.random() * 99)
            CPU.ships[i].setCoords(random, randomAxis)
            check = CPU.gameBoard.setShip(CPU.ships[i])
        }
    }
   
}

function appendListenerP1() {
    let board = document.querySelector('.p1board')
    board.childNodes.forEach(cell => cell.addEventListener('click', placeShip))
}

function appendListenerCPU() {
    let board = document.querySelector('.cpuboard')
    board.childNodes.forEach(cell => cell.addEventListener('click', attack))
}

function removeListenerCPU() {
    let board = document.querySelector('.cpuboard')
    board.childNodes.forEach(cell => cell.removeEventListener('click', attack))
}


function attack(e) {
    let result = Player1.fireShot(parseInt(e.target.dataset.indexNumber), CPU)
            if (result === "AlreadyAttacked") {
                return
            }
            if (result === "gameover") {
                renderShot(e.target.id, "Hit")
                gameOver(body, "Win")
                return
            }
            renderShot(e.target.id, result)
            computerAI()
}

function computerAI() {
    let board = document.querySelector('.p1board')
    let random = Math.floor(Math.random() * 100)
    let result = CPU.fireShot(parseInt(random), Player1)
    while (result === "AlreadyAttacked") {
        random = Math.floor(Math.random() * 100)
        result = CPU.fireShot(parseInt(random), Player1) 
    }
    if (result === "gameover") {
        renderShot(board.children[random].id, "Hit")  
        gameOver(body, "Lose")
        return
    }
    renderShot(board.children[random].id, result)    
}

function gameOver(element, result) {
    renderGameOver(element, result)
    let playAgain = document.querySelector('.play-again')
    playAgain.addEventListener('click', () => {
        let overlay = document.querySelector('.gameover-overlay')
        overlay.remove()
        let gameoverContainer = document.querySelector('.gameover-container')
        gameoverContainer.remove()
        let main = document.querySelector('.game-container')
        while (main.firstChild) {
            main.removeChild(main.lastChild)
        }
        gameStart()
    })
}
})();







