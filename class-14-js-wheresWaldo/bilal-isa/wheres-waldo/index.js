// Partners: Bilal Avvad && Isa Tekinkaya

const arr1 = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
];

const arr2 = [
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
];

const arr3 = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
];

const whereIsWaldoTest = (array) => {
  let location = [];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      if (j === array[i].length - 1 && array[i][j] !== array[i][0]) {
        
        location.push(i+1);
        location.push(j+1);
        break;
      }
      else if (j !== 0){
        if(array[i][j] !== array[i][j+1] && array[i][j] !== array[i][j-1]) {
          location.push(i+1);
          location.push(j+1);
          break;
        }
      }
      else if(array[i][j] !== array[i][j+1] && array[i][j] !== array[i][j+2]) {
        location.push(i+1);
        location.push(j+1);
        break;
      }
    }
  }
  return location;
};

console.log(whereIsWaldoTest(arr1));
console.log(whereIsWaldoTest(arr2));
console.log(whereIsWaldoTest(arr3));