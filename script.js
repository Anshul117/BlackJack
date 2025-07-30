let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let player = {
    name:"Anshul",
    chips : "2000"
}
playerEl.textContent = player.name + ":" +player.chips
//
let cards = []
let sum = 0;
isAlive = false
hasBlackJack = false;
let message = ""
function renderGame() {
    cardEl.textContent = "Cards :"
    for(let i = 0 ; i<cards.length ; i++){
        cardEl.textContent+= cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
       if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard,secondCard)
    sum = firstCard + secondCard
    renderGame()
}
function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}

