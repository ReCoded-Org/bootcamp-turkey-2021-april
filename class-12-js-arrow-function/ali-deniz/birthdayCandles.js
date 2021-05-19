let randomArray = [3,3,3];

function birthdayCakeCandles (candles) {
  let highestCandle = 0;
  let counter = 0;
  for (element of candles) {
    if (element > highestCandle){
      highestCandle = element;
      counter = 1;
    } else if (element == highestCandle) {
      counter++;
    }
  }
return counter;
}

birthdayCakeCandles(randomArray);