function createCard(array, container) {
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
  if (pageNumber >= 1) {
    return pageNumber - 1;
  } else {
    return false;
  }
}

function handleNextItem(pageNumber, totalPageCount) {
  if (pageNumber <= totalPageCount) {
    return pageNumber + 1;
  } else {
    return false;
  }
}
