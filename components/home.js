// GET ELEMENTS
const cities = document.getElementById("cities-btn")
const cars = document.getElementById("car-btn")
const fashion = document.getElementById("fashion-btn")
const alphabet = document.getElementById("alphabet")
const ulEl = documnent.getele("ul-el")

const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]

let choice = document.getElementById("cat-choice")
let catMsg = "You chose the category: "



cities.addEventListener("click", function() {
    choice.textContent = catMsg + "'CITIES'"
})
cars.addEventListener("click", function() {
    choice.textContent = catMsg + "'CAR BRANDS'"
})
fashion.addEventListener("click", function() {
    choice.textContent = catMsg + "'FASHION BRANDS'"
})
























