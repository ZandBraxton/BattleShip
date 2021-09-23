import gameFactory from "../modules/gameFactory";





describe('gametest', () => {
    let gameBoard = new gameFactory('p1')
    let coords = [5,6,7,8,9]
    gameBoard.setShip(coords)

    test('is there a ship here?', () => {
        
        expect(gameBoard.receiveAttack(6)).toBe("Ship here")
        expect(gameBoard.receiveAttack(33)).toBe("Ship not here")
    })


})






