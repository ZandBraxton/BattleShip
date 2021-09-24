import playerFactory from "./modules/playerFactory";
import './styles.css';

//create player
const Player1 = new playerFactory('Player1')

//init board
Player1.gameBoard.makeBoard();
Player1.createShips()
// console.log(Player1)

function placeShips() {
        Player1.gameBoard.setShip(4, Player1.ships[0].length)
        Player1.gameBoard.setShip(12, Player1.ships[1].length)
        Player1.gameBoard.setShip(33, Player1.ships[2].length)
        Player1.gameBoard.setShip(65, Player1.ships[3].length)
        Player1.gameBoard.setShip(76, Player1.ships[4].length)
        return Player1.gameBoard.hasShip
    
}

function renderBoard() {
    let board = document.querySelector('.p1board')
    for (let i = 0; i < Player1.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        cell.textContent = i
        cell.id = i
        cell.classList.add('cell')
        board.appendChild(cell)
    }
}

function renderShips() {
    let cell = ''
    for(let i = 0; i < 5; i++) {
        for (let j = 0; j < Player1.gameBoard.hasShip[i].length; j++) {
             cell = document.getElementById(Player1.gameBoard.hasShip[i][j])
             cell.classList.add("ship")
            }
        }
}

placeShips()

renderBoard();
renderShips()


export {placeShips}

