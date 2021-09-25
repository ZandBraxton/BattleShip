export default class gameFactory {
    constructor() {
        this.boardArea = []
        this.missedShots = []
        this.hasShip = []
        this.allShipsSunk = false
    }

    makeBoard() {
        for (let i = 0; i < 100; i++) {
            this.boardArea.push(i)
        }
    
    }


    // makeBoard() {
    //     let num = 0
    //     for (let i = 0; i < 10; i++) {
    //         let row = []
    //         for (let j = 0; j < 10; j++) {
    //             row.push(num)
    //             num++
    //         }
    //         this.boardArea.push(row)
    //     }
    // }

    setShip(ship) {
        this.hasShip.push(ship)
        return ship
    }

    receiveAttack(location) {
        for (let i = 0; i < this.hasShip.length; i++) {
             if (this.hasShip[i]['coords'].includes(location)) {
            //ship.Hit()
            return "Hit"
            }
        }
        this.missedShots.push(location)
        return "Missed"  
    }

}