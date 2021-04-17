// Partners: Belal Awad && Abduallah Barmu


// challange 1
function challange1 (number){
  
      number = parseInt(number);
      if (number > 10 && number < 20){
        console.log(number);
      }
      else if (number > 20){
        console.log(Math.pow(number, 2));
        
        if (number < 100){
          return (number / 2);
        }
        
        else if (number >= 100 && number < 200){
          return number;
        }
      }
    
      else {
        return (number * 2); 
      }
    }
     
    // challange 2 
    function challange2(num, str){
    
      if (str.length < num ){
        console.log("String was too short."); 
        return false;
      }
    
      else if(num == str.length) { 
        console.log("Exact match");
        return num;
      }
    
      else if (num < str.length){
        return -1;
      }
    }
    
    // Bonus
    function bonus (stringArg) {
    
      switch(stringArg) {
          case RED: return 0; break;
          case BLUE: return 1; break;
          default: return 2;
      }
    }
    
    