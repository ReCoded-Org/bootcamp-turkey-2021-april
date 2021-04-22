//Partners: Deniz, Moulham, Nur
//********FIRST EXERCISE*********************
/*
function reverseCase (string){
  let reverse = "";
  const slength = string.length;
  for (let i = 0; i < slength ; i++){
    if (string[i] == string[i].toUpperCase()){
      reverse += string[i].toLowerCase();
    }else{
      reverse += string[i].toUpperCase();
    } 
  }
console.log(string);  
return reverse;  
}
*/

//TEST CASES
//reverseCase("Happy Birthday") 
//reverseCase("MANY THANKS")
//reverseCase("sPoNtAnEoUs")



//******SECOND EXERCISE********************
/*
function chatroomStatus(array){
  const arraylength = array.length;
  if ( arraylength == 0){
    return "no one online.";
  } else if (arraylength == 1){
    return array[0] + " online";
  } else if (arraylength == 2){
    return array[0] + " and " + array[1] + " online."
  } else {
    return array[0] + " and " + array[1] + " and " + (arraylength -2) + " more online." 
  }
}
*/

//TEST CASES
//chatroomStatus([]) 
//chatroomStatus(["Liz"]) 
//chatroomStatus(["Liz", "Ammar"]) 
//chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"])
