// document.getElementById("square-button").addEventListener("click", function() {
//     let result1 = parseInt(document.getElementById("square-input").value) * parseInt(document.getElementById("square-input").value);
//     console.log(result1);

//     document.getElementById("solution1").innerHTML = result1

//   })



//halfNumber function 
//   document.getElementById("half-button").addEventListener("click", function() {
//     let result2 = parseInt(document.getElementById("half-input").value) / 2;
//     document.getElementById("solution2").innerHTML = result2 ;
//   }) 




// squareNumber  function
const squareInput = document.getElementById('square-input');
const squareButton = document.getElementById('square-button');
const result1 = document.getElementById('solution1');

squareButton.addEventListener('click', function (e) {
    result1.textContent = squareInput.value * squareInput.value ;
})



// halfNumber function 
const halfInput = document.getElementById('half-input');
const half = document.getElementById("half-button");
const result2 = document.getElementById('solution2')

half.addEventListener('click', function (e) {
    result2.textContent = "half of " + halfInput.value + "is " + parseInt(halfInput.value / 2);
});



// precentOf function
const fracNum = document.getElementById("percent1-input");
const wholeNum = document.getElementById("percent2-input");
const percent = document.getElementById("percent-button");
const result3 = document.getElementById("solution3")

percent.addEventListener('click', function (e) {
    result3.textContent = fracNum.value + " is " + ((fracNum.value / wholeNum.value) * 100) + "% of " + wholeNum.value;
})





const area = document.getElementById("area-input");
const areaButton = document.getElementById("area-button");
const result4 = document.getElementById("solution")

// areaOfCircle function
areaButton.addEventListener('click', function (e) {
    result4.textContent = "The area for a circle with radius " + area.value + " is " + (Math.PI * (Math.pow(area.value, 2)));
});

