export default function header() {
    const content = document.querySelector("#content")

    const restaurantName = document.createElement('div')
    restaurantName.classList.add('restaurant-name')
    restaurantName.textContent = 'Ambur Biryani'
    content.appendChild(restaurantName)

    const header = document.createElement('header')
    content.appendChild(header)

    const home = document.createElement('button')
    home.classList.add('home')
    home.textContent ='Home'
    header.appendChild(home)

    const menu = document.createElement('button')
    menu.classList.add('menu')
    menu.textContent = 'Menu'
    header.appendChild(menu)

    const contact = document.createElement('button')
    contact.classList.add('contact')
    contact.textContent = 'Contact'
    header.appendChild(contact)
}