import gameFactory from "../modules/gameFactory";
import playerFactory from "../modules/playerFactory"

let ship =  {
    name: "name",
    coords: "5, 6, 7, 8, 9"
}



describe('gametest', () => {
    let gameBoard = new gameFactory('p1')
    gameBoard.makeBoard()

    test('ship placement', () => {
        
        expect(gameBoard.setShip(ship)).toStrictEqual(ship)
   
    })

    test('is there a ship here?', () => {
        
        gameBoard.setShip(ship)
        expect(gameBoard.receiveAttack(6)).toBe("Hit")
        expect(gameBoard.receiveAttack(33)).toBe("Missed")
    })


})






