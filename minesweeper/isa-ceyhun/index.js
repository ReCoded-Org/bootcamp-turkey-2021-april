/*
~ Pseudo Code ~

forloop for outer mineField
forloop for inner mineField
if cond for checking 1 or 0
  first) 1 to 9 -displaying mine-
  second) mineField[i+1][j+1] == 1 || mineField[i-1][j-1] == 1  || mineField[i-1][j+1] == 1  || mineField[i+1][j-1] == 1 
  third) count var for  how many miners
  forth) displaying empty areas to how many mines ->    = count

well it didnt worked :'D 
    had problem with undefined / out of bounds of array
*/

let mineField = 
[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

function MineSweeper(matrix){
  let displayField = []
  for(let i = 0; i < matrix.length; i++){
    let row = []
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        row.push(9)
      }
      else{
        row.push(neighbourChecker(matrix, i, j))
      }
    }
    displayField.push(row)
  }

  return `
  Mine Field
  ${mineField[0]}
  ${mineField[1]}
  ${mineField[2]}
  ${mineField[3]}

  Display Field
  ${displayField[0]}
  ${displayField[1]}
  ${displayField[2]}
  ${displayField[3]}
  `
}

function neighbourChecker(matrix, rowIndex, columnIndex){
  let counter = 0
  for(let i = rowIndex - 1; i <= rowIndex + 1 && i < matrix.length; i++){
    //Great way to deal with "undefined"
    if(!!matrix[i]){
      for(let j = columnIndex - 1; j <= columnIndex + 1 && j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          ++counter
        }
      }
    }
  }
  return counter
}

console.log(MineSweeper(mineField))