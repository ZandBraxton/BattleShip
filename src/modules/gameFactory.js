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
            this.allShipsSunk = true
            return "Game Over"
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
