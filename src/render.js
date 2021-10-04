function renderBoard(element, player) {
    let main = document.querySelector('.game-container')
    let board = document.createElement('div')
    board.classList.add(element)
    for (let i = 0; i < player.gameBoard.boardArea.length; i++) {
        let cell = document.createElement('div')
        //cell.textContent = i
        cell.classList.add('cell')
        cell.id = `${player.name} ${i}`
        cell.dataset.indexNumber = i
        board.appendChild(cell)
    }
    main.appendChild(board)
}

function renderShips(board, player) {
    let currentBoard = document.querySelector(board)
    for (let i = 0; i < player.gameBoard.hasShip.length; i++) {
        for (let j = 0; j < player.gameBoard.hasShip[i].length; j++) {
             let index = player.gameBoard.hasShip[i].coords[j]
             let child = currentBoard.childNodes[index]
             child.classList.add('ship')
        }  
    }
}

function renderShot(location, result) {
    let coords = document.getElementById(location)
    if (result === "Missed") {
        coords.classList.add("missed")
    } else if(result === "Hit") {
        coords.classList.add('hit')
    }
}


function renderGameOver(element, result) {
    const overlay = document.createElement('div')
    overlay.classList.add('gameover-overlay')

    const header = document.querySelector('header')
    const gameoverContainer = document.createElement('div')
    gameoverContainer.classList.add('gameover-container')

    const gameoverDom = document.createElement('div')
    gameoverDom.classList.add('gameover')
    if (result === "Win") {
        gameoverDom.textContent = 'You Win!'
    } else {
        gameoverDom.textContent = 'You Lose!'
    }

    const playAgain = document.createElement('button')
    playAgain.textContent = "Play Again?"
    playAgain.classList.add('play-again')
    
    element.appendChild(overlay)
    gameoverContainer.appendChild(gameoverDom)
    gameoverContainer.appendChild(playAgain)
    header.appendChild(gameoverContainer)
}

export {renderBoard, renderShips, renderShot, renderGameOver}