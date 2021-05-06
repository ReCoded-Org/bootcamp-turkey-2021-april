//Partners Deniz and Nidal
//First we define variables for the input and solution elements to use later
let number1 = document.querySelector("#square-input");
let number2 = document.querySelector("#half-input");
let number3 = document.querySelector("#percent1-input");
let number4 = document.querySelector("#percent2-input");
let number5 = document.querySelector("#area-input");
let solution = document.querySelector("#solution");

/*All our functions go here
Functions make the calculations then display the result in the solution div, as well as on console. They also return the result.*/
function squareNumber(number){
  number = number.value;
  const result = number*number;
  console.log(`The result of squaring the number ${number} is ${result}`);
  solution.innerText = `The result of squaring the number ${number} is ${result}`;
  return result;
}

function halfNumber(number){
  number = number.value;
  const result = number/2;
  console.log(`Half of ${number} is ${result}`);
  solution.innerText = `Half of ${number} is ${result}`;
  return result;
}

function fractionNumber(number , wholeNumber){
  number = number.value;
  wholeNumber = wholeNumber.value
  const result = number/wholeNumber*100;
  console.log(`${number} is ${result}% of ${wholeNumber}`);
  solution.innerText = `${number} is ${result}% of ${wholeNumber}`;
  return result;
}

function areaOfCircle(number){
  number = number.value;
  const result = 2*number*Math.PI.toFixed(2);
  console.log(`The area for a circle with radius ${number} is ${result}`);
  solution.innerText =`The area for a circle with radius ${number} is ${result}`;
  return result;
}

/*function last (number){
  const result1 = number/2;
  const result2 = result1*result1;
  const result3 = 2*result2*Math.PI;
  const result4 = result3/result2*100;
  solution.innerText = result4 +"%";
  return result4;
}*/

//We have eventlisteners listed here. Changed the triggers to be input buttons as requested in the last section of README "Bonus: respond to key presses so that the user doesn't have to click the button."
const sqButton = document.getElementById("square-button");
sqButton.addEventListener('click', function (){squareNumber(number1);})

const hfButton = document.getElementById("half-button");
hfButton.addEventListener('click', function (){halfNumber(number2);})

/*const fraction1Button = document.getElementById("percent1-button");
fraction1Button.addEventListener('click', function (){fractionNumber(number3, number4);})*/

const fraction2Button = document.getElementById("percent-button");
fraction2Button.addEventListener('click', function (){fractionNumber(number3, number4);})

const circleAreaButton = document.getElementById("area-button");
circleAreaButton.addEventListener('click', function (){areaOfCircle(number5);})

