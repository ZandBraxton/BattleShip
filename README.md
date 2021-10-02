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

Player 1 is created
Player 1's gameboard is created
Now you need to make the ships
To make the first ship, you need to make it
then you place it down
I click on a location which is determined by the length of the ship


<!-- when placing ships, check for
No collisons with wall or other ships
return and force placement again if collison -->
<!-- make mouse hover show ship placement 
Make mouse hover register if rotation is y axis -->
<!-- make mouse hover go away after all five ships are placed -->


make game end screen
stop event listener on game end
make restart game work
<!-- add rotation to ship -->

