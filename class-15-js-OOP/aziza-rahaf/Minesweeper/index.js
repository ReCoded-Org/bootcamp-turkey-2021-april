function minesweeper(matrix) {
  var newMatrix = [];
  let count = 0;
  for (var rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    newMatrix.push([]);
    for (var colIndex = 0; colIndex < matrix.length; colIndex++) {
      if (matrix[rowIndex][colIndex] == 1) {
        count = 9;
      } else {
        count = getCountByNeighbour(matrix, rowIndex, colIndex);
      }
      newMatrix[rowIndex][colIndex] = count;
    }
  }
  return newMatrix;
}
const getCountByNeighbour = (matrix, rowIndex, colIndex) => {
  let counter = 0;
  for (let i = rowIndex - 1; i <= rowIndex + 1 && i < matrix.length; i++) {
    if (typeof matrix[i] !== "undefined") {
      for (let j = colIndex - 1; j <= colIndex + 1 && j < matrix[rowIndex].length; j++) {
        if (matrix[i][j] === 1) {
          ++counter;
        }
      }
    }
  }
  return counter;
};
const testArr = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];
console.log(minesweeper(testArr));
