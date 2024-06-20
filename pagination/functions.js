function createCard(array, container) {
  container.innerHTML = "";
  container.innerHTML += `
      ${array
        .map(
          (currentObj) => `
        <div class="pagination__container--card">
          <h3>${currentObj.title}</h3>
          <p class="cardItem" id="${currentObj.id}">
            ${currentObj.description}
          </p>
          <p><strong>Instructor:</strong> ${currentObj.instructor}</p>
          <p><strong>Duration:</strong> ${currentObj.duration}</p>
          <p><strong>Level:</strong> ${currentObj.level}</p>
          <p><strong>Rating:</strong> ${currentObj.rating}</p>
          <p><strong>Students:</strong> ${currentObj.students}</p>
          <p><strong>Language:</strong> ${currentObj.language}</p>
        </div>
      `
        )
        .join("")}
     
  `;
}

function generatePagination(pageCount, container) {
  let paginationHTML = `
    <ul id="pagination__pages--list" class="pagination__pages--list">
      <li id="previousBtn">Previous</li>
  `;
  for (let i = 0; i < pageCount; i++) {
    paginationHTML += `
      <li class="pagination__pages--item" id="page${i + 1}" data-value="${
      i + 1
    }">${i + 1}</li>
    `;
  }
  paginationHTML += `
      <li id="nextBtn">Next</li>
    </ul>
  `;
  container.innerHTML = paginationHTML;
}

function totalPages(totalLimit, arrayLength) {
  return Math.ceil(arrayLength / totalLimit);
}

function addActiveClass(element) {
  element.classList.add("active");
}

function handlePreviousItem(pageNumber) {
  if (pageNumber > 1) {
    return pageNumber - 1;
  } else {
    return false;
  }
}

function handleNextItem(pageNumber, totalPageCount) {
  if (pageNumber < totalPageCount) {
    return pageNumber + 1;
  } else {
    return false;
  }
}

function deActivateLiItems() {
  document
    .querySelectorAll(".pagination__pages--item.active")
    .forEach((item) => {
      item.classList.remove("active");
    });
}

function paginate(array, pageNumber, pageSize) {
  --pageNumber;
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

function renderPage() {
  cardsToRender = paginate(data, pageNumber, limitPerPage);
  createCard(cardsToRender, paginationContainer);
  activatePageNumber(pageNumber);
}


function activatePageNumber(pageNumber) {
  document
    .querySelectorAll(".pagination__pages--item.active")
    .forEach((item) => item.classList.remove("active"));
  document.getElementById(`page${pageNumber}`).classList.add("active");
}

function handlePaginationClick(e) {
  const currentListItem = e.target;
  const tagName = currentListItem.tagName;
  const id = currentListItem.id;

  if (tagName === "LI" || id === "previousBtn" || id === "nextBtn") {
    let newPageNumber = null;

    if (id === "previousBtn") {
      newPageNumber = handlePreviousItem(pageNumber);
    } else if (id === "nextBtn") {
      newPageNumber = handleNextItem(pageNumber, pageCount);
    } else if (!currentListItem.classList.contains("active")) {
      newPageNumber = Number(currentListItem.dataset.value);
    }

    if (newPageNumber !== null && newPageNumber !== pageNumber) {
      pageNumber = newPageNumber;
      renderPage();
    }
  }
}
