function squareNumber(num) {
  console.log(`The result of squaring the number ${num} is  ${num ** 2}`);
  return num ** 2;
}

function halfNumber(num) {
  console.log(`Half of ${num} is ${num / 2}`);
  return num / 2;
}

function percentOf(num1, num2) {
  console.log(`${num1} is ${(num1 * 100) / num2}% of ${num2}`);
  return (num1 * 100) / num2;
}

function areaOfCircle(num) {
  console.log(`The area for a circle with radius  ${num} is ${num ** 2 * Math.PI.toFixed(2)}`);
  return num ** 2 * Math.PI.toFixed(2);
}

function calculate(num) {
  let halfNum = halfNumber(num);
  let squareNum = squareNumber(halfNum);
  let areaNum = areaOfCircle(squareNum);
  let percentOfNum = percentOf(areaNum, squareNum);
}

document.getElementById("square-button").addEventListener("click", function () {
  let num = document.getElementById("square-input").value;
  squareNumber(num);
});

document.getElementById("half-button").addEventListener("click", function () {
  let num = document.getElementById("half-input").value;
  halfNumber(num);
});

document.getElementById("area-button").addEventListener("click", function () {
  let num = document.getElementById("area-input").value;
  areaOfCircle(num);
});

document.getElementById("percent-button").addEventListener("click", function () {
  let num1 = document.getElementById("percent1-input").value;
  let num2 = document.getElementById("percent2-input").value;
  percentOf(num1, num2);
});
