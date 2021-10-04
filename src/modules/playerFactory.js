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
        ship = new shipFactory("Destroyer", 3)
        this.ships.push(ship)
        ship = new shipFactory("Submarine", 3)
        this.ships.push(ship)
        ship = new shipFactory("Patrol Boat", 2)
        this.ships.push(ship)
    }

    fireShot(location, player) {
        let result = player.gameBoard.receiveAttack(location)
        if (result === "Missed") {
            return result
        }
        if (result === "AlreadyAttacked") {
            return result
        }
        let isDead = result.Hit(location)
        if (isDead === true) {
            //result will be game over if all ships are sunk
           let isGameOver = player.gameBoard.sinkShip(result)
           if (isGameOver === "Game Over") {
               return "gameover"
           }
        }
        return "Hit"

    }




}