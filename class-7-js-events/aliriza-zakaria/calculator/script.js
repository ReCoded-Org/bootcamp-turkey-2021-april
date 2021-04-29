// let squareValue = document.getElementById("square-input").value;
let squareButton = document.getElementById("square-button");

// Challange1 Starts

squareButton.addEventListener("click", function(){
  let squareValue = document.getElementById("square-input").value;
console.log(squareNumber(squareValue))
})

function squareNumber(num1){
  const squ = num1 * num1;
  const message = 'The result of squaring the number '+ num1 +' is ' + squ +'.';
  console.log(message);
  return squ;
}

// Challange1 Ends



// Challange 2 stars


// let halfValue = document.getElementById("half-input").value;
const halfButton = document.querySelector("#half-button");

halfButton.addEventListener("click", function(){
  const halfInput = document.getElementById("half-input").value;
console.log(halfNumber(halfInput))
})

function halfNumber(num1){
  let half = num1 / 2   
    const message = "Half of " + num1 + " is "+ half +"."
  console.log(message)
  return half
}


// Challange2 Ends

// Challange3 Starts

// fraction = x;
// whole = y;
// result = z;
// (100 * x) / y = z

// const fraction = document.getElementById("percent1-input").value;
const percentButton = document.querySelector("#percent-button");

percentButton.addEventListener("click", function(){
  const fraction = document.getElementById("percent1-input").value;
  const whole = document.getElementById("percent2-input").value;
console.log(percentOf(fraction, whole));
})

function percentOf(fraction, whole){
  
  let percent = (100 * parseInt(fraction)) / parseInt(whole)
  
    const message = fraction + " is " + percent + "% of "+ whole + "."
  console.log(message)
  return (percent + "%")
}


// Challange3 Ends


// Challange4 Starts

// let halfValue = document.getElementById("half-input").value;
const areaButton = document.querySelector("#area-button");

areaButton.addEventListener("click", function(){
  const areaInput = document.getElementById("area-input").value;
console.log(areaOfCircle(areaInput))
})

function areaOfCircle(radius){
  let area = Math.PI * (radius * radius)
  
    const message = "The area for a circle with radius " + radius + " is "+ area + "."
  console.log(message)
  return area
}

// Challange4 Ends
