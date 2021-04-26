// challenge1
function squareNumber(num) {
    const squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}

const challenge1 = document.getElementById('square-button');
challenge1.addEventListener('click', () => {
  const input = document.getElementById('square-input').value;
  const result = document.createElement('p');
  result.innerText = `The result of squaring the number ${input} is ${squareNumber(input)}`; 
  const position = document.getElementById('challeng-one');
  position.appendChild(result);
});


// challenge2
function halfNumber(num) {
    const half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

const challenge2 = document.getElementById('half-button');
challenge2.addEventListener('click', () => {
  const input = document.getElementById('half-input').value;
  const result = document.createElement('p');
  result.innerText = `Half of ${input} is ${halfNumber(input)}`; 
  const position = document.getElementById('challeng-two');
  position.appendChild(result);
});


// challenge3
function percentOf(num1, num2) {
    const percent = ((num1/num2) * 100).toFixed(2);
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}


const challenge3 = document.getElementById('percent-button');
challenge3.addEventListener('click', () => {
  const percent1Input = document.getElementById('percent1-input').value;
  const percent2Input = document.getElementById('percent2-input').value;
  const result = document.createElement('p');
  result.innerText = `${percent1Input} is ${percentOf(percent1Input, percent2Input)} % of ${percent2Input}`; 
  const position = document.getElementById('challeng-three');
  position.appendChild(result);
});


// challenge4
function areaOfCircle(radius) {
    var area = (Math.PI * (radius * radius)).toFixed(2);
    console.log('The area of circle with radius ' + radius + ' is ' + area);
    return area;
}


const challenge4 = document.getElementById('area-button');
challenge4.addEventListener('click', () => {
  const input = document.getElementById('area-input').value;
  const result = document.createElement('p');
  result.innerText = `The area of circle with radius ${input} is ${areaOfCircle(input)}`; 
  const position = document.getElementById('challenge-four');
  position.appendChild(result);
});


function doDifferentThings(num) {
    const half    = halfNumber(num);
    const squared = squareNumber(half);
    const area    = areaOfCircle(squared);
    const result  = percentOf(squared, area);
}

doDifferentThings(5);