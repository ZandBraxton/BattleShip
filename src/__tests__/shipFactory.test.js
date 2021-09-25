
import shipFactory from '../modules/shipFactory'



let ship = new shipFactory("carrier", 5)
let area = []
for (let i = 0; i < 100; i++) {
    area.push(i)
}



test('ship attacked', () => {
    ship.setCoords(4, area)


    expect(ship.Hit(6)).toBe("got hit")
    expect(ship.Hit(20)).toBe("missed")
})



test('ship dead', ()=> {
    ship.setCoords(5, area)
    ship.Hit(5);
    ship.Hit(6);
    ship.Hit(7);
    ship.Hit(8);
    ship.Hit(9);
    expect(ship.sunk).toBe(true)

})


test('coordinates placed', () => {
    expect(ship.setCoords(4, area)).toBe(ship)
})