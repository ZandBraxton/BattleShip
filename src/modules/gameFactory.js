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

    setShip(location, length) {
        let coords = this.boardArea.slice(location, location + length)
        this.hasShip.push(coords)
        return coords
    }

    receiveAttack(location) {
        if (this.hasShip[0].includes(location)) {
            //ship.Hit()
            return "Ship here"
        } else {
            this.missedShots.push(location)
            return "Ship not here"
        }
    }
}