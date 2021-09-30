import playerFactory from '../modules/playerFactory'

function placeShips(player) {
    player.ships[0].setCoords(91, player.gameBoard.boardArea)
    player.gameBoard.setShip(player.ships[0])

    player.ships[1].setCoords(12, player.gameBoard.boardArea)
    player.gameBoard.setShip(player.ships[1])

    player.ships[2].setCoords(33, player.gameBoard.boardArea)
    player.gameBoard.setShip(player.ships[2])

    player.ships[3].setCoords(65, player.gameBoard.boardArea)
    player.gameBoard.setShip(player.ships[3])

    player.ships[4].setCoords(50, player.gameBoard.boardArea)
    player.gameBoard.setShip(player.ships[4])

    return player.gameBoard.hasShip
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
    placeShips(Player1)
    placeShips(CPU)
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







