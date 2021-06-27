function whereIsWaldo (arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr[i].length; j++) {
      const first = arr[0][0];
      if (arr[i][j] !== first){
        let solution = [i+1, j+1]
        return solution;
      }
      else if (arr[0][1] !== first && arr[0][2] !== first){
        let solution = [i+1, j+1]
        return solution;
      }
      else continue;
    }
  }
}

function whereIsWaldoV2 (arr) {
  let arrSize = arr[0].length;
  let finalPosition = [];

  let flattenedArr = arr.reduce (function (acc, curr) {
    return acc.concat(curr)
  }, [])

  function oddOneOut(arr) {
  let word = arr[0] === arr[1] ? arr[0] : arr[1] === arr[2] ? arr[1] : arr[0];
  const index = arr.findIndex(r => r !== word);
  return index;
  }
  
  const index = oddOneOut(flattenedArr) + 1;
  
  let indexX = 0;
  let indexY = 0;

  const secondIndex = index % arrSize;

  if (secondIndex === 0) {
    indexY = arrSize;
  } else {
    indexY = secondIndex;
  }

  const firstIndex = index / arrSize;
  
  indexX =  Math.ceil(firstIndex);
  

  return `(${indexX}, ${indexY})`;
}



console.log(whereIsWaldoV2([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "c"],
  ["d", "c", "c", "c"]
]))