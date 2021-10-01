import playerFactory from '../modules/playerFactory'

function placeShips(player) {
    player.ships[0].setCoords(91, "x")
    player.gameBoard.setShip(player.ships[0])

    player.ships[1].setCoords(12, "x")
    player.gameBoard.setShip(player.ships[1])

    player.ships[2].setCoords(33, "x")
    player.gameBoard.setShip(player.ships[2])

    player.ships[3].setCoords(65, "x")
    player.gameBoard.setShip(player.ships[3])

    player.ships[4].setCoords(50, "x")
    player.gameBoard.setShip(player.ships[4])

    return player.gameBoard.hasShip
}

function computerAI() {
    let random = Math.floor(Math.random() * 99)
    let result = CPU.fireShot(parseInt(random), Player1)
    while (result === "AlreadyAttacked") {
        random = Math.floor(Math.random() * 99)
        result = CPU.fireShot(parseInt(random), Player1)
    }
}



describe('tests', () => {
    let Player1;
    let CPU

    beforeEach(() => {
    Player1 = new playerFactory('Player1')
    CPU = new playerFactory('CPU')
    Player1.gameBoard.makeBoard()
    Player1.createShips()
    CPU.gameBoard.makeBoard()
    CPU.createShips()
    CPU.ships[0].setCoords(13, 0)
    CPU.gameBoard.setShip(CPU.ships[0])
    })

    test('init', () => {
        expect(Player1.name).toBe('Player1')
        // expect(Player1.gameBoard).toBe([])
        expect(Player1.ships[0].name).toBe("Carrier")
        expect(Player1.ships[1].name).toBe("Battleship")
        expect(Player1.ships[2].name).toBe("Destroyer")
        expect(Player1.ships[3].name).toBe("Submarine")
        expect(Player1.ships[4].name).toBe("Patrol Boat")
    })


    test('shoot', () => {
        expect(Player1.fireShot(14, CPU)).toBe('Hit')
        expect(Player1.fireShot(9, CPU)).toBe('Missed')
        expect(Player1.fireShot(9, CPU)).toBe('AlreadyAttacked')
    })
    
})







