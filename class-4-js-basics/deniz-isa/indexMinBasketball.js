//Partners Isa Tekinkaya, Ufuk Deniz Demirbilek
function convert(num){
  const minutes = num;
  const seconds = minutes*60;
  return seconds;
}

function points(points2, points3){
  const score = (points2*2) + (points3*3);
  return score;
}
//points(38, 8) ➞ 100
function greet(firstName, lastName){
  const fullName = firstName + " " + lastName;
  return "Hello " + fullName;
}