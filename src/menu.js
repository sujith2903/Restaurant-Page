export default function menu() {

    const content = document.querySelector("#content")
    
    const body = document.createElement('div')
    body.classList.add('body','menu')
    content.appendChild(body)

    const foods = ['veg', 'chicken', 'mutton', 'shrimp', 'fish', 'egg']
    const titles = ['Vegetable Biryani', 'Chicken Biryani', 'Mutton Biryani', 'Shrimp Biryani', 'Fish Biryani', 'Egg Biryani']
    const descriptions = ['Layered rice dish made with Indian spices, rice, fresh herbs, and mixed vegetables',
        'Layered rice dish made with Indian spices, rice, fresh herbs, and Chicken drumstick',
        'Layered rice dish made with Indian spices, rice, fresh herbs, and mutton',
        'Layered rice dish made with Indian spices, rice, fresh herbs, and shrimp',
        'Layered rice dish made with Indian spices, rice, fresh herbs, and king fish',
        'Layered rice dish made with Indian spices, rice, fresh herbs, and boiled egg']
    const prices = ['$10.99','$12.99','$13.99','$14.99','$15.99','$11.99']
    
    for (let i = 0; i < 6; i++){

        let foodDiv = `${foods[i]}` + `Div`
        foodDiv = document.createElement('div')
        foodDiv.classList.add('food')
        body.appendChild(foodDiv)

        let foodImg = `${foods[i]}` + `Img`
        foodImg = document.createElement('img')
        foodImg.src = `img/` + `${foods[i]}` + `-biryani.jpg`
        foodImg.classList.add(`${foods[i]}` + `-img`)
        foodDiv.appendChild(foodImg)

        let foodName = `${foods[i]}` + `Name`
        foodName = document.createElement('div')
        foodName.classList.add(`${foods[i]}` + `-name`)
        foodName.textContent = titles[i]
        foodDiv.appendChild(foodName)

        let foodText = `${foods[i]}` + `Text`
        foodText = document.createElement('div')
        foodText.classList.add(`${foods[i]}` + `-text`)
        foodText.textContent = descriptions[i]
        foodDiv.appendChild(foodText)

        let foodPrice = `${foods[i]}` + `Price`
        foodPrice = document.createElement('div')
        foodPrice.classList.add(`${foods[i]}` + `-price`)
        foodPrice.textContent = prices[i]
        foodDiv.appendChild(foodPrice)
    }
}




