const cities = document.getElementById("cities-btn")
const cars = document.getElementById("car-btn")
const fashion = document.getElementById("fashion-btn")
const alphabet = document.getElementById("alphabet")

let guessWord = document.getElementById("word-to-guess")
let fashionBrands = []
let carBrands = []
let cityNames = ["sheffield", "manchester", "leeds", "nottingham", "york", "birmingham"]
let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]
let startChars = chars;
let guessedChars = [];
let lives = 10

let choice = document.getElementById("cat-choice")
let catMsg = "You chose the category: "
let random 
let word

const removeButton = (position) => {
    var button = document.getElementById(position);
    button.parentNode.removeChild(button);
}

cities.addEventListener("click", function () {
    choice.textContent = catMsg + "'CITIES'"
    random = Math.floor(Math.random() * cityNames.length)
    word = cityNames[random]
    console.log(cityNames[random])
    game()
})
cars.addEventListener("click", function () {
    choice.textContent = catMsg + "'CAR BRANDS'"
    game()
})
fashion.addEventListener("click", function () {
    choice.textContent = catMsg + "'FASHION BRANDS'"
    game()
})
let charChoice
const handleClick = (position) => {
    charChoice = startChars[position];
    guessedChars.push(charChoice);
    chars = chars.filter(char => !charChoice.includes(char));
    removeButton(position);
    console.log(charChoice)
    if (word.includes(charChoice)) {
        console.log("IS")
        guessWord.textContent += charChoice
    } else {
        console.log("NOT")
        lives -= 1
        console.log(lives)
    }
}
function game() {
    let list = ""
    for (let i = 0; i < startChars.length; i++) {
        list += `
        <li>
        <button class="alph" id="${i}" onclick="handleClick(${i})">
            ${startChars[i]}
        </button>
        </li>
        `
    }
    alphabet.innerHTML = list
}




















