export default function menu() {

    const content = document.querySelector("#content")
    
    const body = document.createElement('div')
    body.classList.add('body')
    content.appendChild(body)

    const foods = ['veg', 'chicken', 'mutton', 'shrimp', 'fish', 'egg']

    for (let i = 0; i < 6; i++){

        let foodDiv = `${foods[i]}` + `Div`
        foodDiv = document.createElement('div')
        foodDiv.classList.add('food')
        body.appendChild(foodDiv)

        let foodImg = `${foods[i]}` + `Img`
        foodImg = document.createElement('img')
        foodImg.classList.add(`${foods[i]}`+`-img`)
        foodDiv.appendChild(foodImg)

        let foodText = `${foods[i]}` + `Text`
        foodText = document.createElement('div')
        foodText.classList.add(`${foods[i]}`+`-text`)
        foodDiv.appendChild(foodText)
    }
}