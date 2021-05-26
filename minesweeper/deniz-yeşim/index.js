/*  [[0,0]:1, [0,1]:1, [0,2]:1],
    [[1,0]:1, [1,1]:0, [1,2]:1],
    [[2,0]:1, [2,1]:1, [2,2]:1]

for ([i-1,j-1])
  if there is a mine increment the value of i by 1
*/
function mineSweeper(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
      //Change the mines as represented by 1's into 9's
       if(array[i][j]===1) {
        array[i][j] = 9;    
        }    
      }
  }
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        //Change the 0's into numbers indicating how many mines there are 
        if (array[i][j]===0) { 
          array[i][j] = countMines(i,j,array)
        } 
      }
  }
return array
}
     
function countMines (i,j,array) {
    const size = array[0].length; //define the sub-array length to define borders next,
    let mineCount = 0; 
    for(let a = i-1 ; a<=i+1 ; a++){ //3 iterations; i-1, i, i+1
      for (let b = j-1; b<=j+1 ; b++){ // 3 iterations; j-1, j, j+1
        if (a>=0 && b>=0 && a<=size-1 && b<=size-1){ // define the bounds to loop through so ex.[-1][0] is not checked
          if (a===i && b===j) { //exclude the [i,j] element
            continue}
          if (array[a][b]===9) mineCount++
        }     
      }
    }
    return mineCount;         
}

mineSweeper([
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 1],
      [1, 1, 0, 0]])
