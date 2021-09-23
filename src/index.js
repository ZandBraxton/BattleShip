import playerFactory from "./modules/playerFactory";

//create player
const Player1 = new playerFactory('Player1')

//init board
Player1.gameBoard.makeBoard()
Player1.createShips()

function placeShips() {
    for (let i = 0; i < 5; i++) {
        let currentShip = Player1.ships[i]
        let location = 4
        let coords = Player1.gameBoard.boardArea.slice(location, location + currentShip.length)
        Player1.gameBoard.setShip(coords)
        Player1.ships[i].coords = coords
    }
    
}


export {placeShips}

