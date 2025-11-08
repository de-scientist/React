//get elements from the DOM 
const plusButton = document.getElementById("plus-button")
const numberElement = document.getElementById("number-element")
const interpretationElement = document.getElementById("interpretation")
const minusButton = document.getElementById("minus-button")

let number = 1;
numberElement.textContent = number;
interpretationElement.textContent = `${number} is an odd number`

plusButton.addEventListener("click", () => {
    number += 1;
    numberElement.textContent = number
    if (number % 2 === 0) {
        interpretationElement.textContent = `${number} is an even number`
    } else {
        interpretationElement.textContent = `${number} is an odd number`
    }
})

minusButton.addEventListener("click", () => {
    number -= 1;
    numberElement.textContent = number
    if (number % 2 === 0) {
        interpretationElement.textContent = `${number} is an even number`
    } else {
        interpretationElement.textContent = `${number} is an odd number`
    }
})