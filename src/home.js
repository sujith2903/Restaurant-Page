export default function home() {
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

    const about = document.createElement('div')
    about.classList.add('about')
    content.appendChild(about)

    const intro = document.createElement('div')
    intro.classList.add('intro')
    intro.textContent = 'Rice + Spice makes everything nice'
    about.appendChild(intro)

    const history = document.createElement('div')
    history.classList.add('history')
    history.textContent = 'Family owned restaurant since 1995 serving Biryani and Love'
    about.appendChild(history)


}