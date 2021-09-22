
import shipFactory from '../modules/shipFactory'



let ship = new shipFactory("carrier", 5)
ship.setCoords([5,6,7,8,9])

test('ship got hit', () => {
    expect(ship.Hit(6)).toBe("got hit")
})

test('ship missed', () => {
    expect(ship.Hit(20)).toBe("missed")
})

test('ship dead', ()=> {
    ship.Hit(5);
    ship.Hit(6);
    ship.Hit(7);
    ship.Hit(8);
    ship.Hit(9);
    expect(ship.sunk).toBe(true)

})


test('coordinates placed', () => {
    expect(ship.setCoords([5,6,7,8,9])).toStrictEqual([5,6,7,8,9])
})