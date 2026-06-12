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
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){

 return age >= 18 ? true : false
}
)

console.log(adults)

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){

 return age >= 18 ? true : false
}
)

console.log(adults)

const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

const newYorkSeries = series.filter(function(show){
    return show.location === 'New York'
})

console.log(newYorkSeries)

/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
*/

const thriller_show = series.filter(function(show) {
    return show.genres.includes("thriller")
})

console.log(thriller_show)

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/

const total_students_grade = grades.reduce(function(total,currentElement){
    return (total + currentElement)

})


console.log(total_students_grade / grades.length)

/* 
    Below is an array of objects representing expenses and refunds. 
    Positive amounts are expenses, negative amounts are refunds. 
    
    We want to find out how much money was spent in 2023. 
*/

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpenseOrRefund = expensesAndRefunds[i]
    
    if (currentExpenseOrRefund.year >= cutoffDate) {
        console.log(`Reached cutoff date, exiting loop`)
        break   
    }
    
    if (currentExpenseOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`)
        continue
    } 
    
    totalSpent += currentExpenseOrRefund.amount 
}


console.log(`Total amount spent on items in 2023: $${totalSpent}`)

const dailyStepsArr = [1000, 1200, 800, 1500, 1100, 1900, 1300]

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice) {
    return invoice > 1000
})

// .indexOf() gives us the index of a given item in the array. 
// console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array. 
console.log(invoicesUSDArr.at(-2))


const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring"

/*
Challenge:
    1. Use replaceAll and regex to ensure the first 
       character of each sentence is uppercase.
       You will need to use a string method which converts 
       characters to uppercase.
*/

console.log(
paragraph.replaceAll(/(?:^|(?<=\.\s+))\w/g,function(match) {
    return match.toUpperCase()
}))

const sentence = "i went to Australia and i saw a shark"

/*
Challenge:
    1. Change the lowercase i’s to uppercase.
  
*/
console.log(sentence.replaceAll('i', 'I'))


const sentence = "i went to Australia and i saw a shark"

/*
Challenge:
    1. Change the lowercase i’s to uppercase.
  
*/
console.log(sentence.replaceAll('i', 'I'))



