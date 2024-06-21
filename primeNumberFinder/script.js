"use strict";

// dom
let primeNumberInput = document.querySelector("#primeNumberInput");
const clearBtn = document.querySelector("#clearResult");
const formSubmit = document.querySelector("#primeNumberForm");
const submitBtn = document.getElementById("submit");
let output = document.getElementById("outputValue");

// logic
document.addEventListener("DOMContentLoaded", () => {
  formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmission();
  });
});

clearBtn.addEventListener("click", () => handleClearInput(primeNumberInput));

function handleClearInput(input) {
  input.value = "";
}

function handleFormSubmission() {
  let primeValue = parseInt(primeNumberInput.value.trim());
  let isValid = isFormValid(primeValue);
  if (isValid) {
    displayResult(primeValue);
  } else {
    console.log("form invalid");
  }
}

function isFormValid(inputValue) {
  return typeof inputValue === "number" ? true : false;
}

function displayResult(number) {
  let primeNumber = checkPrimeNumber(number);
  output.textContent = primeNumber ? "Prime Number!" : "Not a Prime Number!";
}

function checkPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  let sqrtNum = Math.sqrt(number);
  for (let i = 5; i <= sqrtNum; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
