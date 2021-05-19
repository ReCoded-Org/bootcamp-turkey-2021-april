function check(num){
    if(num>10 && num < 20){
      console.log(num)
    } else {
      if(num > 20){
        console.log(num * num)
        if(num < 100){
          return num / 2
        } else if (num < 200) {
          return num
        }
      }
      return num * 2
    } 
  }
  