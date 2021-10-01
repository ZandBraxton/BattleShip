export default class shipFactory {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.coords = []
        this.sunk = false
    }

    setCoords(location, axis) {
        for (let i = 0; i < this.length; i++) {
            if (axis === 0) {
                this.coords.push(location + i)
            } else {
                this.coords.push(location + i * 10)
            }
            
        }
        
        // let coords = area.slice(location, location + this.length)
        // this.coords = coords
        return this
    }

    Hit(location) {
            let index = this.coords.indexOf(location)
            this.coords.splice(index, 1)
            if (this.coords.length === 0) {
                return this.isSunk()
            }
            return "got hit"
    }

    isSunk() {
       this.sunk = true
       return this.sunk
    }

};
