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
