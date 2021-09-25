import playerFactory from '../modules/playerFactory'
import {placeShips} from '../index'


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
        console.log(CPU.gameBoard.hasShip.length)
        expect(Player1.fireShot(14, CPU)).toBe('Hit')
        expect(Player1.fireShot(9, CPU)).toBe('Missed')
    })
})







