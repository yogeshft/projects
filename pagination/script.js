"use strict";
// dom
let paginationContainer = document.querySelector(".pagination__container");
let paginationPages = document.querySelector(".pagination__pages");

// initialize variables
const limitPerPage = 5;
let pageNumber = 1;
let currentPageNumber = 1;
const arrayLength = data.length;
const pageCount = totalPages(limitPerPage, arrayLength);
let paginationList;
document.addEventListener("DOMContentLoaded", () => {
  createCard(data, paginationContainer);
  generatePagination(pageCount, paginationPages);
  document.getElementById(`page${pageNumber}`).classList.add("active");

  // event delegation on ul elements
  paginationList = document.querySelectorAll("#pagination__pages--list li");

  paginationList.forEach((listItem) => {
    listItem.addEventListener("click", (e) => {
      let currentListItem = e.target;
      if (currentListItem.id === "previousBtn") {
        console.log("previous btn triggered");
        currentPageNumber = handlePreviousItem(pageNumber);
        console.log(currentPageNumber)
      } else if (currentListItem.id === "nextBtn") {
        console.log("next btn triggered");
        debugger
        currentPageNumber = handleNextItem(pageNumber, pageCount);
        console.log(currentPageNumber)

      } else {
        if (!currentListItem.classList.contains("active")) {
          document
            .querySelectorAll(".pagination__pages--item.active")
            .forEach((item) => {
              item.classList.remove("active");
            });
          currentListItem.classList.add("active");
          console.log(parseInt(currentListItem.dataset.value));
        }
      }
    });
  });
});
