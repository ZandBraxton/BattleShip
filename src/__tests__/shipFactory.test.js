
import shipFactory from '../modules/shipFactory'

let ship
beforeEach(() => {
    return ship = new shipFactory("carrier", 5)
  });






test('ship attacked', () => {
    ship.setCoords(4, "x")


    expect(ship.Hit(6)).toBe("got hit")
})



test('ship dead', ()=> {
    ship.setCoords(5, "x")
    ship.Hit(5);
    ship.Hit(6);
    ship.Hit(7);
    ship.Hit(8);
    ship.Hit(9);
    expect(ship.sunk).toBe(true)

})

test('ship sunk true', ()=> {
    ship.setCoords(5, "x")
    ship.Hit(5);
    ship.Hit(6);
    ship.Hit(7);
    ship.Hit(8);
    expect(ship.Hit(9)).toBe(true)

})



test('coordinates placed', () => {
    expect(ship.setCoords(4, "x")).toBe(ship)
})