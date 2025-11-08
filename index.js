//get elements from the DOM 
const plusButton = document.getElementById("plus-button");
const numberElement = document.getElementById("number-element");
const interpretationElement = document.getElementById("interpretation");
const minusButton = document.getElementById("minus-button");

//initialize number variable
let number = 1;

//display initial number and interpretation
numberElement.textContent = number;
interpretationElement.textContent = `${number} is an odd number`;

//function to update interpretation based on whether the number is even or odd
function updateInterpretation() {
    if (number % 2 === 0) {
        interpretationElement.textContent = `${number} is an even number`;
    } else {
        interpretationElement.textContent = `${number} is an odd number`;
    }
}

//event listener for the plus button (increment)
plusButton.addEventListener("click", () => {
    number += 1;  //increase number by 1
    numberElement.textContent = number; //update displayed number
    updateInterpretation(); 
})

minusButton.addEventListener("click", () => {
    number -= 1;
    numberElement.textContent = number;
    
})