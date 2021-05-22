let array1 = [
    ["d", "c", "c", "c"],
    ["c", "c", "c", "c"]
  ]

let array2 = [
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "A", "B"]
]


let array3 = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
]


function whereIsWaldo(array){
  // console.log(array)     -> outer
  // console.log(array[0])  -> inner
  for(let i = 0; i < array.length; i++){
    console.log("Outer Array: ",array[i])

    for(let j = 0; j < array[i].length; j++){
      console.log("Inner Array: ",array[i][j])


      if(array[i][j] !== array[0][0]){
        console.log("Char: ", array[i][j])
        let waldo = [i+1, j+1]
        console.log("IF WORKED: ", waldo)
        return waldo
      }
      else if(array[0][1] !== array[0][0] && array[0][2] !== array[0][0]){
        let waldo = [i+1, j+1]
        console.log("ELSE IF WORKED: ", waldo)
        return waldo
      }
      else{
        console.log("ELSE WORKED\n")
        continue
      }


    }
  }
}

console.log("ARRAY1")
console.log(whereIsWaldo(array1))
console.log("\n\nARRAY2")
console.log(whereIsWaldo(array2))
console.log("\n\nARRAY3")
console.log(whereIsWaldo(array3))