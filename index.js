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
    if (condition) {
        
    } else {
        
    }
})