export default class shipFactory {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.coords = []
        this.sunk = false
    }

    setCoords(location, axis) {
        //sets coords on the ship object itself
        for (let i = 0; i < this.length; i++) {
            if (axis === 0) {
                this.coords.push(location + i)
            } else {
                this.coords.push(location + i * 10)
            }
        }
        return this
    }

    Hit(location) {
            let index = this.coords.indexOf(location)
            //remove the coords from the array if hit
            this.coords.splice(index, 1)
            if (this.coords.length === 0) {
                //if all coords on the ship are hit, sink the ship
                return this.isSunk()
            }
            return "got hit"
    }

    isSunk() {
       this.sunk = true
       return this.sunk
    }

};
