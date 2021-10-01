import playerFactory from "./modules/playerFactory";
import './styles.css';

//create player
const Player1 = new playerFactory('Player1')
const CPU = new playerFactory('CPU')
let i = 0
let axis = "x"
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
    if (axis === "x") {
        axis = "y"
    } else {
        axis = "x"
    }
}


function placeShips(player) {
        player.ships[0].setCoords(91, axis)
        player.gameBoard.setShip(player.ships[0])

        player.ships[1].setCoords(12, axis)
        player.gameBoard.setShip(player.ships[1])

        player.ships[2].setCoords(33, axis)
        player.gameBoard.setShip(player.ships[2])

        player.ships[3].setCoords(65, axis)
        player.gameBoard.setShip(player.ships[3])

        player.ships[4].setCoords(50, axis)
        player.gameBoard.setShip(player.ships[4])

        return player.gameBoard.hasShip
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
        placeShips(CPU)
        renderBoard('.cpuboard', CPU);
        renderShips('.cpuboard', CPU)
        appendListenerCPU()
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







