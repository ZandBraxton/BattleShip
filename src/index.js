import playerFactory from "./modules/playerFactory";
import './styles.css';
import './assets/asset'

//create player
const Player1 = new playerFactory('Player1')
const CPU = new playerFactory('CPU')
let i = 0
let axis = 0
let root = document.documentElement;


//init board

const newGame = document.querySelector('.new-game')

newGame.addEventListener('click', gameStart)

function gameStart() {
    Player1.gameBoard.makeBoard();
    Player1.createShips()
    renderBoard('p1board', Player1);
    createRotateButton()
    appendListenerP1()
    hoverStyle(axis)
    newGame.style.display = "none"
    // newGame.removeEventListener('click', gameStart)
}









// const rotate = document.querySelector('.rotate')
// rotate.addEventListener('click', changeAxis)

function createRotateButton(element) {
    const body = document.querySelector('body')
    const rotate = document.createElement('button')
    rotate.classList.add('rotate')
    rotate.textContent = "Rotate"
    rotate.addEventListener('click', changeAxis)
    body.appendChild(rotate)
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
    console.log(check)
    if (check === false) {
        return
    }
    renderShips('.p1board', Player1)
    console.log(Player1)
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
        //renderShips('.cpuboard', CPU)
        appendListenerCPU()
    } else {
        hoverStyle(axis)
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
    let main = document.querySelector('.game-container')
    let board = document.createElement('div')
    board.classList.add(element)
    for (let i = 0; i < player.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        // cell.textContent = i
        cell.classList.add('cell')
        cell.id = `${player.name} ${i}`
        cell.dataset.indexNumber = i
        board.appendChild(cell)
    }
    main.appendChild(board)
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









