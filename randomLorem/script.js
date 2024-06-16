"use strict";
const words = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "Ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "Duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "Excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

// dom elements
let form = document.getElementById("form");
let result = document.getElementById("result");
let paragraphCountInput = document.getElementById("paragraphCount");
let paragraphCountValue = document.getElementById("paragraphCountValue");
let wordCountInput = document.getElementById("wordCount");
let wordCountValue = document.getElementById("wordCountValue");
let submitBtn = document.getElementById("submit");

// initially display the default value of the range sliders
paragraphCountValue.textContent = paragraphCountInput.value;
wordCountValue.textContent = wordCountInput.value;

// change event
paragraphCountInput.addEventListener("input", () => {
  paragraphCountValue.textContent = paragraphCountInput.value;
});

wordCountInput.addEventListener("input", () => {
  wordCountValue.textContent = wordCountInput.value;
});

// Submit event for form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const wordCount = convertStringToNumber(wordCountValue.textContent);
    const paragraphCount = convertStringToNumber(
      paragraphCountValue.textContent
    );
    const generatedParagraphs = generateParagraph(
      words,
      wordCount,
      paragraphCount
    );
    result.textContent = generatedParagraphs;
  } catch (error) {
    console.error(error.message);
  }
});

// functions
function convertStringToNumber(string) {
  const trimmedString = string.trim();
  const number = Number(trimmedString);
  if (isNaN(number)) {
    throw new Error("Invalid number format");
  }
  return number;
}

function generateWord(array, limit) {
  let words = [];
  for (let i = 0; i < limit; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    words.push(array[randomIndex]);
  }
  return words.join(" ");
}
function generateParagraph(wordsArray, wordCount, paragraphCount) {
  let paragraphs = [];
  for (let i = 0; i < paragraphCount; i++) {
    const randomWords = generateWord(wordsArray, wordCount);
    paragraphs.push(randomWords);
  }
  return paragraphs.join("\n\n");
}
