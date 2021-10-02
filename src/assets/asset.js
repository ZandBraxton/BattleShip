import logo from './battleship.png'


const header = document.querySelector('.header')

const myLogo = new Image()
myLogo.id = "logo"
myLogo.src = logo
myLogo.alt = "logo"
myLogo.classList.add('logo')

header.appendChild(myLogo)