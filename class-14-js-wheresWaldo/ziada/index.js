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

const whereIsWaldoTest = function(arr) {
  let result = 
  arr.reduce((acc, curr) => {
    for (let i = 0; i < curr.length; i++) {
        if ( i == 0 && curr[0] !== curr[1] && curr[0] !==curr[2]) {
          acc.push(arr.indexOf(curr)+1)
          acc.push(0+1)
          break
        }
      else  if (curr[i] !== curr[i+1] && curr[i] !==curr[0]) {
          acc.push(arr.indexOf(curr)+1)
          acc.push(i+1)
          break
        } 
      }

    console.log(acc)
    return acc
  }, [])
  return result
}

whereIsWaldoTest(arr3); 
whereIsWaldoTest(arr1);
whereIsWaldoTest(arr2);



// Another way to solve the activity

// const whereIsWaldoTest = (array) => {
//   let location = [];
//   for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//       if (j === array[i].length - 1 && array[i][j] !== array[i][0]) {
//         location.push(i+1);
//         location.push(j+1);
//         break;
//       }
//       else if (j !== 0){
//         if(array[i][j] !== array[i][j+1] && array[i][j] !== array[i][j-1]) {
//           location.push(i+1);
//           location.push(j+1);
//           break;
//         }
//       }
//       else if(array[i][j] !== array[i][j+1] && array[i][j] !== array[i][j+2]) {
//         location.push(i+1);
//         location.push(j+1);
//         break;
//       }
//     }
//   }
//   return location;
// };

// console.log(whereIsWaldoTest(arr1));
// console.log(whereIsWaldoTest(arr2));
// console.log(whereIsWaldoTest(arr3));