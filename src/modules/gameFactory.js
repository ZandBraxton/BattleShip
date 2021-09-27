export default class gameFactory {
    constructor() {
        this.boardArea = []
        this.attacked = []
        this.hasShip = []
        this.allShipsSunk = false
    }

    makeBoard() {
        for (let i = 0; i < 100; i++) {
            this.boardArea.push(i)
        }
    
    }


    setShip(ship) {
        this.hasShip.push(ship)
        return ship
    }

    sinkShip(ship) {
        let index = this.hasShip.indexOf(ship)
        this.hasShip.splice(index, 1)
        console.log(this.hasShip)
        if (this.hasShip.length === 0) {
            this.allShipsSunk = true
        }
        return this.hasShip
    }

    receiveAttack(location) {
        for (let i = 0; i < this.hasShip.length; i++) {
             if (this.hasShip[i]['coords'].includes(location)) {
                this.attacked.push(location)
                return this.hasShip[i]
            }
        } if (this.attacked.includes(location)) {
            return "AlreadyAttacked"
        } else {
            this.attacked.push(location)
            return "Missed"  
        }
        
    }

}
