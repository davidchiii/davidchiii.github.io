const data = require('./data.json')
console.log(data)
console.log(data[0]["image"])
console.log(data.length)


function generateCards(){
    const cardContainer = document.getElementById("card-container")
    const len = data.length

    for(let i = 0; i < len; i++){
        const card = document.createElement('div')
        card.classList.add("card")

        const image = document.createElement('img')
        image.src = data[i]["image"]
        
        const description = document.createElement('p')
        description.textContent = data[i]["description"]

        card.appendChild(image)
        card.appendChild(description)
        cardContainer.appendChild(card)
    }
}