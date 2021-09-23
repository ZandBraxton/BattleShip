import playerFactory from "../modules/playerFactory";


const Player1 = new playerFactory('Player1')

test('init', () => {
    Player1.gameBoard.makeBoard()
    Player1.createShips()
    expect(Player1.name).toBe('Player1')
    // expect(Player1.gameBoard).toBe([])
    expect(Player1.ships[0].name).toBe("Carrier")
})