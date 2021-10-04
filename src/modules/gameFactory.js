export default class gameFactory {
    constructor() {
        this.boardArea = []
        this.attacked = []
        this.hasShip = []
        this.allShipsSunk = false
    }

    makeBoard() {
        //for some reason breaks if i is 0
        for (let i = 1; i < 101; i++) {
            this.boardArea.push(i)
        }
    
    }

    checkCollision(coords) {
        //collision with x axis
        const collision = [9, 19, 29, 39, 49, 59, 69, 79, 89];
        //check if collision with other ship
        for (let i = 0; i < this.hasShip.length; i++) {
            if (coords.some((coord) => this.hasShip[i].coords.includes(coord)))
            {
                return false
            }
        }
        //check if collision exceeds board size
        if (coords.some((coord) => !this.boardArea[coord])) {
            return false
        } 
        //check if collision with x axis
        else if (collision.some((coord) => {
            return [coord, coord + 1].every((result) => 
                coords.includes(result)
            )  
        })
        ) {
            return false
        } else {
            return true
        }
    }

    setShip(ship) {
       let check = this.checkCollision(ship.coords)
       if (check === false) {
           ship.coords = []
           return false
       }
        this.hasShip.push(ship)
        return ship
    }

    sinkShip(ship) {
        let index = this.hasShip.indexOf(ship)
        this.hasShip.splice(index, 1)
        if (this.hasShip.length === 0) {
            //if the array is 0 then all ships are sunk, returns game over
            this.allShipsSunk = true
            return "Game Over"
        }
        return this.hasShip
    }

    receiveAttack(location) {
        //goes through all 5 ships, checking if the target is within any of their coords
        for (let i = 0; i < this.hasShip.length; i++) {
             if (this.hasShip[i]['coords'].includes(location)) {
                this.attacked.push(location)
                return this.hasShip[i]
            }
            //if this spot has already been attacked
        } if (this.attacked.includes(location)) {
            return "AlreadyAttacked"
        } else {
            this.attacked.push(location)
            return "Missed"  
        }
        
    }

}
