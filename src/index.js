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
        cell.id = i
        cell.classList.add('cell')
        // cell.addEventListener('click', () => {

        // })
        board.appendChild(cell)
    }
}

function renderShips(player) {
    let cell = ''
    for(let i = 0; i < 5; i++) {
        for (let j = 0; j < player.ships[i].length; j++) {
             cell = document.getElementById(player.ships[i].coords[j])
             cell.classList.add("ship")
            }
        }
}

console.log(Player1)
 console.log(CPU)



renderBoard('.p1board', Player1);
renderShips(Player1)

renderBoard('.cpuboard', CPU);
// renderShips(CPU)




export {placeShips}

