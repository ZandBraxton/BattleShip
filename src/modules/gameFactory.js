export default class gameFactory {
    constructor(player) {
        this.player = player
        this.name = 'gameBoard'
        this.height = 10
        this.width = 10
        this.board = []
    }

    makeBoard() {
        let num = 0
        for (let i = 0; i < this.height; i++) {
            let row = []
            for (let j = 0; j < this.width; j++) {
                row.push(num)
                num++
            }
            this.board.push(row)
        }
        return this.board
    }

    setShip() {

    }

    receiveAttack(location) {

    }
}