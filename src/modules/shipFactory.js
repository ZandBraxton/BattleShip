export default class shipFactory {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.coords = []
        this.sunk = false
    }

    setCoords(location, area) {
        let coords = area.slice(location, location + this.length)
        this.coords = coords
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
