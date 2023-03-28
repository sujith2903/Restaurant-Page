export default function home() {

    const content = document.querySelector("#content")
    
    const body = document.createElement('div')
    body.classList.add('body')
    content.appendChild(body)

    const intro = document.createElement('div')
    intro.classList.add('intro')
    intro.textContent = 'Rice + Spice makes everything nice'
    body.appendChild(intro)

    const history = document.createElement('div')
    history.classList.add('history')
    history.textContent = 'Family owned restaurant since 1995 serving Biryani and Love'
    body.appendChild(history)
}