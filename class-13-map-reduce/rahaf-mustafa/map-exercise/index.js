function capitalize (str){
    let newArr = str.split("");
    const toUpper = newArr.map(function (string){
      return string.toUpperCase()
    })
    return toUpper;
 }

//console.log(capitalize("whoop"));


function swapCase(strOfWords){
  let newString = strOfWords.split(" ");
  //console.log(newString);
  let result = newString.map(function(string, index){
    if (index %2 ==0)
      return capitalize(string).join("");
    else
      return string
    
  })
  return result.join(" ")

}
// const numberPlusIndex = numbers.map((number,index) => number + index)
 swapCase("hey gurl, lets javascript together sometime")

