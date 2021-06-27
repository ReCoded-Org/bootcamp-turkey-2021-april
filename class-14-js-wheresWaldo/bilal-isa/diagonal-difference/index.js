// Partners: Bilal Avvad && Isa Tekinkaya

const arr1 = [
  [11, 2, 4],
  [4,  5,  6],
  [10, 8, -12]
]; // 15

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]; // 2

const arr3 = [
  [1, 2,  3, 4,  5],
  [2, 5,  7, 8,  5],
  [9, 30, 1, 7,  8],
  [7, 5,  4, 2,  5],
  [9, 21, 1, 17, 8]
]; // 11

const diagonalDifference = (array) => {
  let rightSum = 0, leftSum = 0, leftRight = 0, rightLeft = array.length - 1;
  for (let i = 0; i < array.length; i++){
    rightSum += array[leftRight][leftRight];
    leftRight++;

    leftSum += array[i][rightLeft];
    rightLeft--;
  }

  return Math.abs(rightSum - leftSum);
};

console.log(diagonalDifference(arr1));
console.log(diagonalDifference(arr2));
console.log(diagonalDifference(arr3));