// Challange 1
function challange1(num) {
    if (num > 10 && num < 20) { 
      console.log(num);
    }
  
    else if (num < 100) {
      return num / 2;
    }
  
    else if (num > 20) {
      console.log(num*num);
    }
  
    else if (num >= 100 && num < 200){
      return num;
    }
  
    else { 
      return num * 2;
    }
  
  }
  
  // Challange 2
  
  function challange2(number, string) {
    if (string.length < number){
      console.log("String was too short.");
      return false;
    } 
    else if (string.length === number){
      console.log("Exact match.");
      return number;
    } 
    else if (string.length > number) {
      return (-1)
    }
  }
  
  let exact = challange2(3, "Ali")
  let short = challange2(2, "Ali")
  let long = challange2(4, "Ali")
  
  console.log(exact);
  console.log(short);
  console.log(long);
  
  // Challange 3
  
  function bonusChallange(word) {
    switch(word) {
      case "RED":
      return 0;
      break;
      
      case "BLUE":
      return 1;
      break;
  
      default:
      return 2;
    }
  }
  
  