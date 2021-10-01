import playerFactory from "./modules/playerFactory";
import './styles.css';

//create player
const Player1 = new playerFactory('Player1')
const CPU = new playerFactory('CPU')
let i = 0
let axis = 0
// const currentPlayer;

//init board




Player1.gameBoard.makeBoard();
Player1.createShips()

// CPU.gameBoard.makeBoard()
// CPU.createShips()

// placeShips(Player1)
// placeShips(CPU)
// console.log(Player1)
// console.log(CPU)


const rotate = document.querySelector('.rotate')
rotate.addEventListener('click', changeAxis)

function changeAxis() {
    if (axis === 0) {
        axis = 1
    } else {
        axis = 0
    }
}




function placeShip(e) {
    let location = parseInt(e.target.dataset.indexNumber)
    
    Player1.ships[i].setCoords(location, axis)
    let check = Player1.gameBoard.setShip(Player1.ships[i])
    console.log(check)
    if (check === false) {
        return
    }
    renderShips('.p1board', Player1)
    console.log(Player1)
    i++
    if (i === 5) {
        let board = document.querySelector('.p1board')
        board.childNodes.forEach(cell => cell.removeEventListener('click', placeShip))
        CPU.gameBoard.makeBoard()
        CPU.createShips()
        placeCPUShips(CPU)
        renderBoard('.cpuboard', CPU);
        renderShips('.cpuboard', CPU)
        appendListenerCPU()
    }
}

function placeCPUShips(CPU) {
    for (let i = 0; i < 5; i++) {
        let randomAxis = Math.round(Math.random())
        let random = Math.floor(Math.random() * 99)
        console.log(random)
        CPU.ships[i].setCoords(random, randomAxis)
        let check = CPU.gameBoard.setShip(CPU.ships[i])
        while (check === false) {
            console.log("IN THE LOOP")
            random = Math.floor(Math.random() * 99)
            CPU.ships[i].setCoords(random, randomAxis)
            check = CPU.gameBoard.setShip(CPU.ships[i])
        }
    }
   
}




function renderBoard(element, player) {
    let board = document.querySelector(element)
    for (let i = 0; i < player.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        cell.textContent = i
        cell.classList.add('cell')
        cell.id = `${player.name} ${i}`
        cell.dataset.indexNumber = i
        board.appendChild(cell)
    }
}

function renderShips(board, player) {
    let currentBoard = document.querySelector(board)
    for (let i = 0; i < player.gameBoard.hasShip.length; i++) {
        for (let j = 0; j < player.gameBoard.hasShip[i].length; j++) {
             let index = player.gameBoard.hasShip[i].coords[j]
             let child = currentBoard.childNodes[index]
             child.classList.add('ship')
        }  
    }
}

function renderShot(location, player, result) {
    // console.log(result)
    let coords = document.getElementById(location)
    if (result === "Missed") {
        coords.classList.add("missed")
    } else if(result === "Hit") {
        coords.classList.add('hit')
    }
}

function appendListenerP1() {
    let board = document.querySelector('.p1board')
    board.childNodes.forEach(cell => cell.addEventListener('click', placeShip))
}



function appendListenerCPU() {
    let board = document.querySelector('.cpuboard')
    let result;
    board.childNodes.forEach(cell => {
        cell.addEventListener('click', (e) => {
            result = Player1.fireShot(parseInt(e.target.dataset.indexNumber), CPU)
            if (result === "AlreadyAttacked") {
                return
            }
            renderShot(e.target.id, CPU, result)
            computerAI()
        })
    })
}

function computerAI() {
    let board = document.querySelector('.p1board')
    let random = Math.floor(Math.random() * 99)
    let result = CPU.fireShot(parseInt(random), Player1)
    while (result === "AlreadyAttacked") {
        random = Math.floor(Math.random() * 99)
        result = CPU.fireShot(parseInt(random), Player1)
    }
    renderShot(board.children[random].id, Player1, result)    
}





renderBoard('.p1board', Player1);
appendListenerP1()
// renderShips('.p1board', Player1)

// renderBoard('.cpuboard', CPU);
// renderShips('.cpuboard', CPU)

// appendListenerCPU()







