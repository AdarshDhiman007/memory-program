const cardArray = [
  {
    name: 'fries',
    img: 'fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'milkshake.png'
  },
  {
    name: 'pizza',
    img: 'pizza.png'
  },
  {
    name: 'fries',
    img: 'fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'milkshake.png'
  },
  {
    name: 'pizza',
    img: 'pizza.png'
  }
]

cardArray.sort(()=> 0.5 - Math.random())

console.log(cardArray)

const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
let won = []

function createBoard ()
{
  for (let i = 0; i < cardArray.length; i++) {
   const card = document.createElement('img')
   card.setAttribute('src','blank.png')
   card.setAttribute('data-id',i)
   card.addEventListener('click', flipcard)
   gridDisplay.append(card)
   console.log(card)
  }
}

createBoard ()

function checkMatch() {
  let cards = document.querySelectorAll('img')

  if(cardsChosenIds[0] == cardsChosenIds[1]){
    alert('You have chosen the same card')
    cards[cardsChosenIds[0]].setAttribute('src','blank.png')
    cardsChosen = []
    cardsChosenIds = []
    return;
  }

  if(cardsChosen[0] == cardsChosen[1])
  {
    alert('You found a match')
    cards[cardsChosenIds[0]].setAttribute('src','white.png')
    cards[cardsChosenIds[1]].setAttribute('src','white.png')
    cards[cardsChosenIds[0]].removeEventListener('click', flipcard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipcard)
    won.push(cardsChosen[0])
    document.getElementById('result').innerHTML = won.length
    
  }
  else{
    cards[cardsChosenIds[0]].setAttribute('src','blank.png')
    cards[cardsChosenIds[1]].setAttribute('src','blank.png')
  }

  if(won.length == (cardArray.length/2))
  {
    document.getElementById('result').innerHTML = 'All cards are matched'
  }
  
  cardsChosen = []
  cardsChosenIds = []
}

function flipcard(){
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name) 
  cardsChosenIds.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)

  if(cardsChosen.length == 2){
    setTimeout( checkMatch,500)
  }

}

