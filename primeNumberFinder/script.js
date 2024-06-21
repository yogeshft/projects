"use strict";

// DOM elements
let primeNumberInput = document.querySelector("#primeNumberInput");
const clearBtn = document.querySelector("#clearResult");
const formSubmit = document.querySelector("#primeNumberForm");
let output = document.getElementById("outputValue");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmission();
  });
});

primeNumberInput.addEventListener("input", (e) => {
  let pattern = /^\d*$/;
  if (!pattern.test(e.target.value)) {
    e.target.value = e.target.value.replace(/\D/g, "");
  }
});

clearBtn.addEventListener("click", () => handleClearInput(primeNumberInput));

// Functions
function handleClearInput(input) {
  input.value = "";
  output.textContent = ""; // Clear output when clearing input
}

function handleFormSubmission() {
  let primeValue = parseInt(primeNumberInput.value.trim());
  if (primeValue) {
    let isValid = isFormValid(primeValue);
    if (isValid && checkPrimeNumber(primeValue)) {
      displayResult(primeValue, true);
    } else {
      displayResult(primeValue, false);
      console.log("form invalid");
    }
  } else {
    return;
  }
}

function isFormValid(inputValue) {
  return !isNaN(inputValue) && inputValue > 1; // Valid if it's a number greater than 1
}

function displayResult(number, isPrime) {
  output.textContent = isPrime ? "Prime Number!" : "Not a Prime Number!";
}

function checkPrimeNumber(number) {
  if (isNaN(number) || number <= 1 || number == "") {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}
