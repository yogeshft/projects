/*
  1. find out total array elements
  2. total limits to show per page
  3. divide total/limit to get page count and render it on ui
  4. initially page number should be 1
  5. add next prev btns and add logic of ++ and --
  6. generateCard(pageNumber,totalArray,limit) => it will return cards based on page number
  7. on every page change generateCard function will be called
*/
// const array = Array.from({ length: 50 }, (v, k) => k + 1);
// const limit = 2;
// let pageNumber = 3;

// for (let i = limit * (pageNumber - 1); i < limit * pageNumber; i++) {
//   // console.log(array[i]);
// }

/*
// Function to paginate an array
function paginate(array, pageNumber, pageSize) {
  --pageNumber; // Adjust to 0-based index

  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
}

// Example usage:
const array = Array.from({ length: 50 }, (v, k) => k + 1); // Example array of 50 items

const pageNumber = 3; // Page number to display (1-based index)
const pageSize = 10; // Number of items per page

const results = paginate(array, pageNumber, pageSize);

console.log(results); // Output the items for the current page

*/

// Lazy pagination using a generator function
function* paginate(array, pageSize) {
  let currentPage = 1;
  while (true) {
    const startIndex = (currentPage - 1) * pageSize;
    const page = array.slice(startIndex, startIndex + pageSize);
    if (page.length === 0) return; // No more items to paginate
    yield page;
    currentPage++;
  }
}

// Example usage:
const array = Array.from({ length: 50 }, (v, k) => k + 1); // Example array of 50 items

const pageSize = 10; // Number of items per page

const paginator = paginate(array, pageSize);

// console.log(paginator)
let pageNumber = 3; // Page number to display
// Advance the paginator to the desired page
for (let i = 1; i < pageNumber; i++) {
  paginator.next();
}

const currentPage = paginator.next().value;
console.log(currentPage); // Output the items for the current page
