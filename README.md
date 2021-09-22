# BattleShip

10x10 grid

0 [0 1 2 3 4 5 6 7 8 9]
1 [10 11 12 13 14 15 16 17 18 19]
2 []
3 []
4 []
5 []
6 []
7 []
8 []
9 []



	Carrier 	5
	Battleship 	4
	Destroyer 	3
	Submarine 	3
	Patrol Boat 2 


Ships need a length

ship {
    name: name
    length: length

    hit() {
        
    }

    isSunk() {
        dead
    }
}