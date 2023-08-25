const rockEl = document.querySelector("#rock")
const scissorsEl = document.querySelector("#scissors")
const paperEl = document.querySelector("#paper")
const humanHandEl = document.querySelector("#human__hand") 
const oppositeHandEl = document.querySelector("#opposite__hand") 
const gameBoard = document.querySelector("#game__board")
const resultEl = document.querySelector("#result")
const meEl = document.querySelector("#me")
const otherEl = document.querySelector("#other")


humanHandEl.innerHTML = `<img src="${"./images/random.jpg"}"/>`
oppositeHandEl.innerHTML = `<img src="${"./images/random.jpg"}"/>`
oppositeHandEl.firstElementChild.style = "height:170px;width:170px;"
let choosen = ""

rockEl.addEventListener("click",() => {
    humanHandEl.innerHTML = `<img src="${"./images/tosh.svg"}" />`
    animationRandom()
    choosen = "rock"
    setTimeout(() => {
        randOppositeHand()
    }, 3500);
})

scissorsEl.addEventListener("click",() => {
    humanHandEl.innerHTML = `<img src="${"./images/qaychi.svg"}" />`
    animationRandom()
    choosen = "scissors"
    setTimeout(() => {
        randOppositeHand()
    }, 3500);
})

paperEl.addEventListener("click",() => {
    humanHandEl.innerHTML = `<img src="${"./images/qogoz.svg"}" />`
    animationRandom()
    choosen = "paper"
    setTimeout(() => {
        randOppositeHand()
    }, 3500);
})

let opposite = ""
let sumOfChoosen = 0
let sumOfOpposite = 0

function randOppositeHand(){
    let natija = ''
    let forRandom = ["./images/tosh.svg","./images/qaychi.svg","./images/qogoz.svg"]
    let result = Math.floor(Math.random() * 3);
    switch(result){
        case 0: opposite = "rock"; break;
        case 1: opposite = "scissors"; break;
        case 2: opposite = "paper"; break;
    }
    if(choosen === opposite){
        natija = "Durrang 😊"
        resultEl.innerHTML = `Natija: ${natija}`
    }
    else if(choosen === "rock" && opposite === "scissors" || choosen === "scissors" && opposite === "paper" || choosen === "paper" && opposite === "rock"){
        sumOfChoosen+=1
        natija = "Siz yutdingiz 🥳"
        resultEl.innerHTML = `Natija: ${natija}`
    }else{
        sumOfOpposite+=1
        natija = "Siz yutqazdingiz 😐"
        resultEl.innerHTML = `Natija: ${natija}`
    }
    meEl.innerHTML = `Sizda: ${sumOfChoosen}`
    otherEl.innerHTML = `Menda: ${sumOfOpposite}`
    oppositeHandEl.innerHTML = `<img src="${forRandom[result]}" />`
}
function animationRandom(){
    oppositeHandEl.innerHTML = `<img src="${"./images/random.jpg"}"/>`
    oppositeHandEl.firstElementChild.style = "height:170px;width:170px;"
    oppositeHandEl.firstElementChild.classList.add('animate__img')
}