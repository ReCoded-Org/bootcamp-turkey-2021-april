//Partners Khadija and Deniz
function whereIsWaldo (arrayOfArrays) {
  //Store array length as number base
  const base = arrayOfArrays[0].length
  //Flatten the arrays into one array
  const flattenedArray = arrayOfArrays.flat(2);
  //Check if the first two elements are the same, if they are pick the first as the filler element and find the different elements index, return it in 1 indexed coordinates [row, column]
  if (flattenedArray[0] === flattenedArray[1]){
    const index = flattenedArray.findIndex(e => e !== flattenedArray[0])
    const rowIndex = Math.floor((index) / base) 
    const columnIndex = (index) % base;
    // Convert the 0-indexed coordinates into 1 indexed coordinates
    return [rowIndex + 1, columnIndex + 1]
    // If the first element and the third is the same, then the different element is [1,2]  
  } else if (flattenedArray[0] === flattenedArray[2]){
    return [1,2]
    //If the second element and the third is the same, then the different element is [1,1]
  } else {
    return [1,1]
  }
}

whereIsWaldo([
  ["A", "A", "A"],
  ["A", "b", "A"],
  ["A", "A", "A"]
]) //➞ [3, 2]

// whereIsWaldo([
//   ["c", "c", "c", "c"],
//   ["c", "c", "c", "d"]
// ]) //➞ [2, 4]

// whereIsWaldo([
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "3", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"]
// ])// ➞ [5, 1]