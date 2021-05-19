const squaredNumber = document.getElementById("square-input");
const half = document.getElementById("half-input");
const fractionNumber = document.getElementById("percent1-input");
const wholeNumber = document.getElementById("percent2-input");
const radiusNumber = document.getElementById("area-input");
const solution = document.getElementById("solution")

function squareNumber (squaredNumber){
  let result = Math.pow(squaredNumber.value, 2);
  console.log("The result of squaring the number " + squaredNumber.value + " is " + result + ".");
  solution.innerText = "The result of squaring the number " + squaredNumber.value + " is " + result + ".";
  return result;
}

function halfNumber (half){
  let result = half.value /2;
  console.log("Half of " + half.value + " is " + result + ".");
  solution.innerText = "Half of " + half.value + " is " + result + ".";
  return result;
}

function percentOf (fractionNumber, wholeNumber){
  let result = parseFloat(fractionNumber.value / wholeNumber.value * 100).toFixed(2);
  console.log(fractionNumber.value + " is " + result + " % of " + wholeNumber.value + ".");
  solution.innerText = fractionNumber.value + " is " + result + " % of " + wholeNumber.value + ".";
  return result;
}

function areaOfCircle (radiusNumber){
  let result = parseFloat(Math.PI * Math.pow(radiusNumber.value, 2)).toFixed(2);
  console.log("The area for a circle with radius " + radiusNumber.value + " is " + result + ".");
  solution.innerText = "The area for a circle with radius " + radiusNumber.value + " is " + result + ".";
  return result;
}

const buttonSquare = document.getElementById("square-button");buttonSquare.addEventListener('click', function(){
squareNumber(squaredNumber);
});
    

const buttonHalf = document.getElementById("half-button");buttonHalf.addEventListener('click', function(){
halfNumber(half)
});

const percentButton = document.getElementById("percent-button");
percentButton.addEventListener('click', function(){
percentOf (fractionNumber, wholeNumber)
});

const areaButton = document.getElementById("area-button");
areaButton.addEventListener('click', function(){
areaOfCircle (radiusNumber)
});

/// Challange extra
let allInput = document.getElementById("all-input");
const allButton = document.getElementById("all-button");
const solutionTwo = document.getElementById("solutionTwo");

function multipleFunctions (allInput){
  let halfNumberNew = allInput.value / 2;
  let squareNumberNew = Math.pow(halfNumberNew, 2);
  let areaOfCircleNew = parseFloat(Math.PI * Math.pow(squareNumberNew, 2)).toFixed(2)
  let percentageNew = parseFloat(squareNumberNew / areaOfCircleNew * 100).toFixed(2);
  solutionTwo.innerText =  "The percentage that area " + areaOfCircleNew + " of the squared number " + squareNumberNew + " is " + percentageNew + " %.";
}

allButton.addEventListener('click', function (){
  multipleFunctions(allInput);
});
