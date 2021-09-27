import playerFactory from "./modules/playerFactory";
import './styles.css';

//create player
const Player1 = new playerFactory('Player1')
const CPU = new playerFactory('CPU')

//init board




Player1.gameBoard.makeBoard();
Player1.createShips()

CPU.gameBoard.makeBoard()
CPU.createShips()

placeShips(Player1)
placeShips(CPU)
console.log(Player1)

function placeShips(player) {
        player.ships[0].setCoords(47, player.gameBoard.boardArea)
        player.gameBoard.setShip(player.ships[0])

        player.ships[1].setCoords(12, player.gameBoard.boardArea)
        player.gameBoard.setShip(player.ships[1])

        player.ships[2].setCoords(33, player.gameBoard.boardArea)
        player.gameBoard.setShip(player.ships[2])

        player.ships[3].setCoords(65, player.gameBoard.boardArea)
        player.gameBoard.setShip(player.ships[3])

        player.ships[4].setCoords(76, player.gameBoard.boardArea)
        player.gameBoard.setShip(player.ships[4])

        return player.gameBoard.hasShip
}

Player1.fireShot(76, CPU)
Player1.fireShot(77, CPU)




function renderBoard(element, player) {
    let board = document.querySelector(element)
    for (let i = 0; i < player.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        cell.textContent = i
        cell.classList.add('cell')
        let result;
        cell.addEventListener('click', (e) => {
            let target = e
            console.log(e)
            // result = Player1.fireShot(parseInt(e.target.id), CPU)
            // renderShot(e.target.id, CPU, result)
            // console.log(CPU)
        })
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
    console.log(result)
    let coords = document.getElementById(location)
    if (result === "Missed") {
        coords.classList.add("missed")
    }
}

console.log(Player1)
console.log(CPU)



renderBoard('.p1board', Player1);
renderShips('.p1board', Player1)

renderBoard('.cpuboard', CPU);
renderShips('.cpuboard', CPU)
// renderShips(CPU)




export {placeShips}

