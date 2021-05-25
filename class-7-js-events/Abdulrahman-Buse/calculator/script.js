let squareButton = document.querySelector("#square-button");
squareButton.addEventListener('click',function squareNumber(){
  let squareInput = document.querySelector("#square-input").value;
  let result = squareInput * squareInput;
  document.querySelector("#squareResult").innerHTML= " the result of squaring " + squareInput +" is " + result;

})


let halfbutton = document.querySelector("#half-button");
halfbutton.addEventListener('click', function halfNumber(){
  let halfInput = document.querySelector("#half-input").value;
  let result = halfInput / 2;
  document.querySelector("#halfResult").innerHTML= "Half of " + halfInput +" is " + result;
})

  let  percentButton = document.querySelector("#percent-button");
   function percentOf(){
    let percent1Input = document.querySelector("#percent1-input").value;
    let percent2Input = document.querySelector("#percent2-input").value;
    let result = ((percent1Input *100) / percent2Input);
    document.querySelector ("#fractionResult").innerHTML= percent1Input+" is "+ result + "% of " + percent2Input
  } 
  percentButton.addEventListener('click',percentOf);
  

  //2 * Math.PI * r 
  let areaButton = document.querySelector("#area-button");
  function areaOfCircle(){
    let areaInput = document.querySelector("#area-input").value;
    let result = 2 * Math.PI * areaInput;
    document.querySelector("#radiusResult").innerHTML= "The area for a circle with radius" + areaInput + " is " + result + "."
  }
  areaButton.addEventListener('click',areaOfCircle);