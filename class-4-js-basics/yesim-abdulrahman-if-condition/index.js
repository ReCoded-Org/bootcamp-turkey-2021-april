function number (x){ 
   if (x<20 && x >10){
    const int =parseInt(x)
    console.log(x);
  }else if(x>20 && x<100){
    console.log(x*x);
  }
  /*else if (x<100){
    console.log(x/2);
  }*/
  else if(x>=100 && x<200){
    console.log(x);
  }
  else {
    console.log(x*2);
  }
}

//  let n = "asd";
//  let lenofn= n.length(n)
 function wordcheck (number, word) {
   //console.log(word.length);
   if (word.length<number){
     console.log("String was too short.");
     return false;
     }
     else if(word.length===number){
     console.log("Exact Match.");
     }
     else if(word.length>number){
     console.log();
     return -1;
     }
 }
function colors (color) {
 switch(color) {
  case "RED":
  return 0;
    // code block
    break;
  case "BLUE":
  return 1;
    // code block
    break;
    
  default:
  return 2;
    // code block
}
}
