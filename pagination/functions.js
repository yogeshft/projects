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
