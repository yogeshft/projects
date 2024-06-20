"use strict";
// dom
let paginationContainer = document.querySelector(".pagination__container");
let paginationPages = document.querySelector(".pagination__pages");

// initialize variables
const limitPerPage = 5;
let pageNumber = 1;

const arrayLength = data.length;
const pageCount = totalPages(limitPerPage, arrayLength);

// main logic start
document.addEventListener("DOMContentLoaded", () => {
  let cardsToRender = paginate(data, pageNumber, limitPerPage);
  createCard(cardsToRender, paginationContainer);
  generatePagination(pageCount, paginationPages);
  document.getElementById(`page${pageNumber}`).classList.add("active");

  // event delegation on ul elements
  let paginationList = document.querySelector("#pagination__pages--list");
  paginationList.addEventListener("click", handlePaginationClick);
});

