function scaleTip (array) {
    const iPosition = (array.length-1)/2; // "I"
  }
  
  
  
  function scaleTip (array) {
    const iPosition = (array.length-1)/2; // "array location of I",
    let leftTotal = 0;
    let rightTotal = 0;
    for (let i = 0; i < array.length; i++){
      if (i < iPosition){
      leftTotal += array[i];
      } else if (i > iPosition) {
      rightTotal += array[i];
      } 
    }
  if ( leftTotal > rightTotal){
    return "left"
  } else if (rightTotal > leftTotal) {
    return "right"
  } else {return "balanced"}
  }
  
  // scaleTip([0, 0, "I", 1, 1])
  // scaleTip([1, 2, 3, "I", 4, 0, 0])
  scaleTip([5, 5,10, 4, 0, "I", 10, 2,4, 2, 1])
  