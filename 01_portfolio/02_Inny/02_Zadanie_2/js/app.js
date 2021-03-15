const getSecondMaxNumber = array => ( array.sort( (el1, el2) => el2 - el1))[1];

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));