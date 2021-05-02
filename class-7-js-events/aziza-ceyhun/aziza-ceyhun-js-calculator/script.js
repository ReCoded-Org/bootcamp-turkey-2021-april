/* Example 1 */
function squareNumber() 
{ 
num = document.getElementById("square-input").value;
document.getElementById("resultone").innerHTML = num * 2;
}
document.getElementById("square-button").addEventListener("click", squareNumber);



/* Example 2 */
function halfNumber() 
{ 
num = document.getElementById("half-input").value;
document.getElementById("resulttwo").innerHTML = num / 2;
}
document.getElementById("half-button").addEventListener("click", halfNumber);



/* Example 3 */
function percentOf(){
  let fraction = document.getElementById("percent1-input").value 
  let whole = document.getElementById("percent2-input").value 
  let resultPercent = ((fraction/whole) * 100).toFixed(2)
  let solutionString = `${fraction} is ${resultPercent}% of ${whole}`
  insideDiv = solutionString
  return document.getElementById("solution").innerHTML = insideDiv;
}
document.getElementById("percent-button").addEventListener("click", percentOf);



/* Example 4 */
function areaOfCircle() 
{ 
num = document.getElementById("area-input").value;
document.getElementById("solutionfour").innerHTML = 2 * Math.PI * num;
}
document.getElementById("area-button").addEventListener("click", areaOfCircle);