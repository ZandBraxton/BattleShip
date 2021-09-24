import gameFactory from "../modules/gameFactory";





describe('gametest', () => {
    let gameBoard = new gameFactory('p1')
    gameBoard.makeBoard()

    test('ship placement', () => {
        
        expect(gameBoard.setShip(4, 5)).toStrictEqual([4, 5, 6, 7, 8])
        expect(gameBoard.setShip(32, 3)).toStrictEqual([32, 33, 34])
    })

    test('is there a ship here?', () => {
        
        gameBoard.setShip(4, 5)
        expect(gameBoard.receiveAttack(6)).toBe("Ship here")
        expect(gameBoard.receiveAttack(33)).toBe("Ship not here")
    })


})






