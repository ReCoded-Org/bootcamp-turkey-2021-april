//Q1 

let countLetters = str => {

let hash = {}
  return str.split('').reduce((acc, curr) => {
   acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, hash );  
};

countLetters("abbcccddddeeeee");



// Q2

const decode = (string) => {
return string.split(" ").map(word => {
return String.fromCharCode(word.split("").reduce((acc, curr) => {
return parseInt(acc) + parseInt(curr)
}))
}).join("")
};

decode("361581732726247521644353 4161492813593986955 84654117917337166147521")


decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")