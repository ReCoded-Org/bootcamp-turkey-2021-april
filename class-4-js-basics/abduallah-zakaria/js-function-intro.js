
function convert(mins) {
  return mins * 60
}

const testFun = convert(6) ;
console.log(testFun) ;

///////////////////////////////////////////////////////////
function points(first, second){
   return (first * 2) + (second * 3)
}

const resutls = points(38, 8)
console.log(resutls)

//////////////////////////////////////////////////////////

function greet(firstName, secondName){
  // return `hello ${firstName} ${secondName}`
  return("Hello" +" " + firstName + " " + secondName)
}

const greetPeople = greet("John", "Doe")
console.log(greetPeople)


/////////////////////////// Bonus /////////////////////////////////
 
function upLow(str1 , str2){
  const result1 = str1.toLowerCase();
  const result2 = str2.toUpperCase();
  return  result1 + " " + result2

}

const testupLow = upLow("hEllO", "Poeple");
console.log(testupLow) 


