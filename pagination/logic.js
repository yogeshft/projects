/*
  1. find out total array elements
  2. total limits to show per page
  3. divide total/limit to get page count and render it on ui
  4. initially page number should be 1
  5. add next prev btns and add logic of ++ and --
  6. generateCard(pageNumber,totalArray,limit) => it will return cards based on page number
*/
const array = Array.from({ length: 50 }, (v, k) => k + 1);
const limit = 2;
let pageNumber = 3;

for (let i = limit * (pageNumber - 1); i < limit * pageNumber; i++) {
  console.log(array[i]);
}
