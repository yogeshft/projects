"use strict";
// dom
let paginationContainer = document.querySelector(".pagination__container");
let paginationPages = document.querySelector(".pagination__pages");

// initialize variables
const limitPerPage = 5;
let pageNumber = 1;

const arrayLength = data.length;
const pageCount = totalPages(limitPerPage, arrayLength);
let paginationList;

// main logic start
document.addEventListener("DOMContentLoaded", () => {
  let cardsToRender = paginate(data, pageNumber, limitPerPage);
  createCard(cardsToRender, paginationContainer);
  generatePagination(pageCount, paginationPages);
  document.getElementById(`page${pageNumber}`).classList.add("active");

  // event delegation on ul elements
  paginationList = document.querySelectorAll("#pagination__pages--list li");
  let currentPageNumber = Number(
    document
      .querySelector("#pagination__pages--list li.active")
      .dataset.value.trim()
  );
  paginationList.forEach((listItem) => {
    listItem.addEventListener("click", (e) => {
      let currentListItem = e.target;
      // handle previous click event
      if (currentListItem.id === "previousBtn") {
        debugger;
        currentPageNumber = handlePreviousItem(pageNumber);
        if (currentPageNumber) {
          deActivateLiItems();
          document
            .getElementById(`page${currentPageNumber}`)
            .classList.add("active");
          pageNumber = currentPageNumber;
          cardsToRender = paginate(data, pageNumber, limitPerPage);
          createCard(cardsToRender, paginationContainer);
        } else {
          return false;
        }

        // handle next click event
      } else if (currentListItem.id === "nextBtn") {
        debugger;
        currentPageNumber = handleNextItem(pageNumber, pageCount);
        if (currentPageNumber) {
          deActivateLiItems();
          document
            .getElementById(`page${currentPageNumber}`)
            .classList.add("active");
          pageNumber = currentPageNumber;
          cardsToRender = paginate(data, pageNumber, limitPerPage);
          createCard(cardsToRender, paginationContainer);
        } else {
          return false;
        }
      } else {
        if (!currentListItem.classList.contains("active")) {
          debugger;
          deActivateLiItems();
          currentListItem.classList.add("active");
          pageNumber = Number(currentListItem.dataset.value.trim());
          currentPageNumber = pageNumber;
          console.log("page number in else block", pageNumber);
          console.log(parseInt(currentListItem.dataset.value));
          cardsToRender = paginate(data, pageNumber, limitPerPage);
          createCard(cardsToRender, paginationContainer);
        }
      }
    });
  });
});
