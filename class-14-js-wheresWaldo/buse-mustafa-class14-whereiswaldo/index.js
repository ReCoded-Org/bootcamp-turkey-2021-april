let example = [
      ["A", "A", "A"],
      ["A", "A", "A"],
      ["A", "X", "A"],
      ["A", "A", "A"],
      ["A", "A", "A"]
    ];

let example2 = [
        ["c", "c", "c", "c"],
        ["c", "c", "c", "d"]
];

function whereIsWaldo(array){
  for (let i=0;i<array.length;i++){
    for(let j = 0; j < array[i].length; j++){
      if(array[i][j]!==array[0][0]){
        let waldo = [i+1, j+1]
        
      return waldo;
        }else if(array[0][0]!==array[0][1]&&array[0][0]!==array[0][2]){
          let waldo = [i+1, j+1]
          return waldo;
        }else {
          continue
        }
    }
  }
}

////////////////////////////////////////////////Buse&Mustafa






