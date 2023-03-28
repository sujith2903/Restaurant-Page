import home from './home.js'
import clear from './clear.js'
import menu from './menu.js'
import contact from './contact.js'
import header from './header.js'

header();
home();

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.textContent == 'Home') {
            console.log('home')
            clear()
            home()
        } else if (button.textContent == 'Menu') {
            console.log('menu')
            clear()
            menu()
        } else if (button.textContent == 'Contact') {
            console.log('contact')
            clear()
            contact()
        }
    })
})
