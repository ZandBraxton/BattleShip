import gameFactory from "./gameFactory"
import shipFactory from "./shipFactory"


export default class playerFactory {
    constructor(name) {
        this.name = name
        this.gameBoard = new gameFactory()
        this.ships = []
    }

    createShips() {
        let ship = new shipFactory("Carrier", 5)
        this.ships.push(ship)
        ship = new shipFactory("Battleship", 4)
        this.ships.push(ship)
    }

    




}