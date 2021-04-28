
const squareNumber = document.getElementById("square-input");
const halfNumber = document.getElementById("half-input");
const fractionNumber = document.getElementById("percent1-input");
const wholeNumber = document.getElementById("percent2-input");
const area = document.getElementById("area-input");
const bonus = document.getElementById("bonus-input");
const solutionArea = document.getElementById("solution");

const squareButton = document.getElementById("square-button");
const halfButton = document.getElementById("half-button");
const percentButton = document.getElementById("percent-button");
const areaButton = document.getElementById("area-button");
const bonusButton = document.getElementById("bonus-button");


// For Square Numbers
squareButton.addEventListener('click', function (e){
  let paragraph = document.createElement('p');
  paragraph.innerText = "The result of squaring the number " + squareNumber.value + " is " + Math.pow(squareNumber.value, 2);
  solutionArea.append(paragraph);
  return paragraph.innerText;
});

// For Dividing Numbers by half
halfButton.addEventListener('click', function (e){
  let paragraph = document.createElement('p');
  paragraph.innerText = "Half of " + halfNumber.value + " is " + (halfNumber.value / 2);
  solutionArea.append(paragraph);
});

// For Percent Numbers
percentButton.addEventListener('click', function (e){
  let paragraph = document.createElement('p');
  paragraph.innerText = fractionNumber.value + " is " + ((fractionNumber.value / wholeNumber.value) * 100) + "% of " + wholeNumber.value;
  solutionArea.append(paragraph);
});

// For Area calculation:
areaButton.addEventListener('click', function (e){
  let paragraph = document.createElement('p');
  paragraph.innerText = "The area for a circle with radius " + area.value + " is " + (Math.pow(area.value, 2) * Math.PI).toFixed(2);
  solutionArea.append(paragraph);
});

//For Bonus:
bonusButton.addEventListener('click', function (e){
  let result = bonus.value;
  result = result / 2;
  result = Math.pow(result, 2);
  result = Math.pow(result, 2)  * Math.PI;
  result = result / Math.pow(result, 2);
  let paragraph = document.createElement('p');
  paragraph.innerText = "The result is " + result.toFixed(2);
  solutionArea.append(paragraph);
});

