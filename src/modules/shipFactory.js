export default class shipFactory {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.coords = []
        this.sunk = false
    }

    setCoords(array) {
        this.coords = array
        return this.coords
    }

    Hit(location) {
        if (this.coords.includes(location)) {
            let index = this.coords.indexOf(location)
            this.coords.splice(index, 1)
            if (this.coords.length === 0) {
                this.isSunk()
            }
            return "got hit"

        } else
            return "missed"
    }

    isSunk() {
       this.sunk = true
    }


};
