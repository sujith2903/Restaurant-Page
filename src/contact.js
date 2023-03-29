export default function contact() {

    const content = document.querySelector("#content")
    
    const body = document.createElement('div')
    body.classList.add('body','contact')
    content.appendChild(body)

    const number = document.createElement('div')
    number.textContent = '(999) - 999 - 9999'
    number.classList.add('number')
    body.appendChild(number)

    const address = document.createElement('div')
    address.classList.add('address')
    body.appendChild(address)

    const street = document.createElement('div')
    street.textContent = '123 ABC Ave,'
    street.classList.add('street')
    address.appendChild(street)

    const city = document.createElement('div')
    city.textContent = 'Dallas,'
    city.classList.add('city')
    address.appendChild(city)

    const state = document.createElement('div')
    state.textContent = 'TX-75201'
    state.classList.add('state')
    address.appendChild(state)

    const time = document.createElement('div')
    time.classList.add('time')
    body.appendChild(time)

    const days = document.createElement('div')
    days.textContent = 'Mon - Sat'
    days.classList.add('days')
    time.appendChild(days)

    const hours = document.createElement('div')
    hours.textContent = '9am - 9pm'
    hours.classList.add('hours')
    time.appendChild(hours)
}