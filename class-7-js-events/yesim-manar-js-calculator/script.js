
const numbersquare = document.getElementById("square-input");

const div = document.getElementById("solution");
const squarebutton = document.getElementById("square-button");
const halfbutton = document.getElementById("half-button");
const halfnumber = document.getElementById("half-input");
const percentbutton = document.getElementById("percent-button");
const fractioninput = document.getElementById("percent1-input");
const wholeinput = document.getElementById("percent2-input");
const radius = document.getElementById("area-input");
const areabutton = document.getElementById("area-button");

squarebutton.addEventListener('click', function (e) {
  //let exponent = 2;
  //let numbera = ( numbersquare.value ** exponent);
  let numbera = Math.pow(numbersquare.value, 2);


  let paragraph = document.createElement('p');
  paragraph.innerText = "The result of squaring the number " + numbersquare.value + " is " + numbera + ".";
  div.append(paragraph);
});


//using the exponent operator
halfbutton.addEventListener('click', function (e) {

  let numberb = halfnumber.value / 2;
  let paragraph1 = document.createElement('p');
  paragraph1.innerText = "Half of " + halfnumber.value + " is " + numberb + ".";
  div.append(paragraph1);
});


//halfofthenumber

percentbutton.addEventListener('click', function (e) {
  let numberc = (fractioninput.value /wholeinput.value)*100 ;
  let numbercc = Math.round(numberc,0)
  let paragraph2 = document.createElement('p');
  paragraph2.innerText = fractioninput.value +" is " + numbercc + "% of  "+ wholeinput.value +  ".";
  div.append(paragraph2);
});

//percentofthenumber


areabutton.addEventListener('click', function (e) {
  let area = (Math.PI * radius.value * radius.value);
  let paragraph3 = document.createElement('p');
  paragraph3.innerText = "The area for a circle with radius "+  radius.value + " is "+ area +"."; ;
  div.append(paragraph3);
});

//are of the circle//