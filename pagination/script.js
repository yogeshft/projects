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
  let currentPageNumber = Number(
    document
      .querySelector("#pagination__pages--list li.active")
      .dataset.value.trim()
  );

  paginationList.addEventListener("click", (e) => {
    let currentListItem = e.target;
    if (
      currentListItem.tagName === "LI" ||
      currentListItem.id === "previousBtn" ||
      currentListItem.id === "nextBtn"
    ) {
      // handle previous click event
      if (currentListItem.id === "previousBtn") {
        currentPageNumber = handlePreviousItem(pageNumber);
        if (currentPageNumber) {
          deActivateLiItems();
          pageNumber = currentPageNumber;
          cardsToRender = paginate(data, pageNumber, limitPerPage);
          createCard(cardsToRender, paginationContainer);

          activatePageNumber(currentPageNumber);
        } else {
          return false;
        }

        // handle next click event
      } else if (currentListItem.id === "nextBtn") {
        currentPageNumber = handleNextItem(pageNumber, pageCount);
        if (currentPageNumber) {
          deActivateLiItems();

          activatePageNumber(currentPageNumber);
          pageNumber = currentPageNumber;
          cardsToRender = paginate(data, pageNumber, limitPerPage);
          createCard(cardsToRender, paginationContainer);
        } else {
          return false;
        }
      } else {
        if (!currentListItem.classList.contains("active")) {
          console.log(currentListItem);
          deActivateLiItems();
          pageNumber = Number(currentListItem.dataset.value);
          if (pageNumber) {
            currentPageNumber = pageNumber;
            cardsToRender = paginate(data, pageNumber, limitPerPage);
            createCard(cardsToRender, paginationContainer);

            activatePageNumber(currentPageNumber);
          }
        }
      }
    }
  });
});
