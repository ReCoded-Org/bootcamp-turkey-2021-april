// Inputs
const squareInput = document.getElementById("square-input");
const halfInput = document.getElementById("half-input");
const percentOneInput = document.getElementById("percent1-input");
const percentTwoInput = document.getElementById("percent2-input");
const areaInput = document.getElementById("area-input");
const finalInput = document.getElementById("final-input");

// Button
const squareButton = document.getElementById("square-button");
const halfButton = document.getElementById("half-button");
const percentButton = document.getElementById("percent-button");
const areaButton = document.getElementById("area-button");
const finalButton = document.getElementById("final-button");

// Solution
const solution = document.getElementById("solution");

//Square the number 

function squareNumber(squareInput){
  const result = Math.pow(squareInput.value, 2);
  solution.innerText = `The result of squaring ${squareInput.value} is ${result}.`;
  return result;
}

squareButton.addEventListener("click", function (){
  squareNumber(squareInput);
});

//Getting Half 

function halfNumber(halfInput) {
  const result = halfInput.value / 2;
  solution.innerText = `Half of ${halfInput.value} is ${result}.`;
  return result;
}
halfButton.addEventListener("click", function (){
  halfNumber(halfInput);
});


//Percent

function percetnOf(percentOneInput, percentTwoInput) {
  const result = parseFloat(percentOneInput.value / percentTwoInput.value * 100).toFixed(2);
  solution.innerText = `${percentOneInput.value} is ${result}% of ${percentTwoInput.value}`;
  return result;
}
percentButton.addEventListener("click", function (){
  percetnOf(percentOneInput, percentTwoInput);
});


//Area of circle 

function areaOfCircle(areaInput) {
  const result = parseFloat(Math.PI * Math.pow(areaInput.value, 2)).toFixed(2);
  solution.innerText = `The area for a circle with radius ${areaInput.value} is ${result}.`
  return result;
}
areaButton.addEventListener("click", function (){
  areaOfCircle(areaInput)
});


//All calculations

function allCalculations(finalInput){
  let resultOne = finalInput.value / 2;
  let resultTwo = Math.pow(resultOne, 2);
  let resultThree = parseFloat(Math.PI * Math.pow(resultTwo, 2)).toFixed(2)
  let resultFour = parseFloat(resultThree / resultTwo).toFixed(2);
  solution.innerText = resultFour;
}

finalButton.addEventListener('click', function (){
  allCalculations(finalInput);
});


