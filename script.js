let data = [
  {
    player: "Jane",
    score: 52
  },

  { player: "steffen",
    score: 52
}

]



const Btn = document.getElementById("log")

Btn.addEventListener("click",function(){
  console.log(data[0].score)


})

let lcountries = ["China","India","USA"]

function generateSentence(disc,array) { 


  let baseString =  `the ${disc} are ${array.length} `
  let lastindex = array.length - 1
  for (let i = 0;i<array.length;i++){
   if (i === lastindex) {
    baseString += array[i]
   }

  else {
    baseString += array[i] +", "
  }

  }
  return baseString


}

console.log(generateSentence("largest countries",lcountries) )

let images = [
  "https://www.w3schools.com/w3images/lights.jpg",
  "https://www.w3schools.com/w3images/nature.jpg",
  "https://www.w3schools.com/w3images/mountains.jpg"
]

const img1 = document.getElementById("container")


function render() {
  for (let i = 0;i<images.length;i++) {
    img1.innerHTML += `<img src="${images[i]}" alt="image">`
  }
}

const player_guess = 8
const correct_answer = 8

const message = player_guess === correct_answer ? "you won the game" : player_guess < correct_answer ? "too low" : "too high"

console.log(message)


function select_item(item) {
  let price = 0

  switch(item) {
    case "Coffee":
      price = 2
      break
    case "Sandwich":
      price = 5
      break
    case "Salad":
      price = 4
      break
    case "Lemon Cake":
      price = 3
      break
    default:
      console.log("we dont have that")
  }
  return `you selected ${item} that will be $${price}`
}

console.log(select_item("biscuit"))

const dream_holiday = {
  destination : "chile",
  activity : "hiking",
  companion : "lifepartner",



}

const {destination , activity , companion} = dream_holiday

console.log(`my dream destination is ${destination}`)



function log_answer(answer,points) {
  console.log(`the answer of the question is ${answer} and if u got it get ${points} points`)
}

game = setTimeout(log_answer,3000,"lima" , 10)

clearTimeout(game)
console.log("canceling ..........")

time = new Date()
console.log((time.getFullYear()).toString())

function greeting(username) {
  if (username) {
    console.log(`hello ${username}`)

  }
  else {
    throw new Error("no username provided")
  }
}

//greeting()


// String()
//   Number()
//Boolean()
//Array()
//Object()

current_ticket_number = 0

function ticket_to_customer() {
  return  ++current_ticket_number
}

console.log(`the ticket number of 1st customerc. is: ${ticket_to_customer()}`)
console.log(`the ticket number of 2st customerc. is: ${ticket_to_customer()}`)
console.log(`the ticket number of 3st customerc. is: ${ticket_to_customer()}`)

number = 332_34343_423_23423_4242_423n

console.log(typeof number)

speed_warning = (speed_limit,speed) => { 
  
  if (speed > speed_limit)
    {`you are not goof at ${speed}mph`}
  else {
    "you are good"
  }
}

console.log(speed_warning(40,120))

distance_travel_miles = [255,233,444,555]
distance_travel_km = distance_travel_miles.map(distance => Math.round(distance*1.4)) 

const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]
for (let character of characters){
    for (let power of character.powers){
        console.log(power)
    }
  }
  const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(character1[property])

}
characters.forEach(function(character){
    character.powers.forEach(function(power){
        console.log(power)
    })

  })
  characters.forEach(function(character, index){
    console.log(index, character.title)
})

const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles, index){
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}`
})

console.log(distanceWalkedKmArr)
