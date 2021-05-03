// first way
// const societyName = ["Adam", "Sarah", "Malcolm"]
// const myFunc = function(letter) {
//     for (let i = 0; i < letter.length; i ++) {
//         console.log(letter[i].charAt(0));
//     }
// }
// myFunc(societyName);



// second way
function societyName(arr) {
    for( let i = 0; i < arr.length; i++ ) {
      // when I use return here I just get A
      console.log(arr[i][0]);
    }
  }
  
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
  
  
  
  // third way
  // const societyName = ["Adam", "Sarah", "Malcolm"]
  // console.log(societyName.map(item => item[0]))
  