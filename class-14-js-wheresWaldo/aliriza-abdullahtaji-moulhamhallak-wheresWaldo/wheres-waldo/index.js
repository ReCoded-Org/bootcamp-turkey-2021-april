let whereIsWaldo = function (table) {

    for (let i = 0; i < table.length; i++) {

        let row = table[i];
      
        for (let j = 0; j < row.length - 1; j++) {
        
            if (row[j] !== row[j+1]) {
        
                if (row[j+1] == row[j+2]) {
                    let res= [i+1,j+1];
                    return res;
                }
                
                else {
                    let res= [i+1,j+2];
                    console.log(res)
                    return res;
                } 
            }
        };
    };
};
  
  
  
// whereIsWaldo([
//   ["A", "A", "A"],
//   ["A", "A", "A"],
//   ["A", "B", "A"]
// ]) 

//   whereIsWaldo([
//     ["d", "c", "c", "c"],
//     ["c", "c", "c", "c"]
//   ]) 

// whereIsWaldo([
//   ["P", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"],
//   ["O", "O", "O", "O"]
// ]) 
  