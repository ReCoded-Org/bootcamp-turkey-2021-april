//Question 1:
let getBudgets = [
{ name: "John", age: 21, budget: 23000 },
{ name: "Steve",  age: 32, budget: 40000 },
{ name: "Martin",  age: 16, budget: 2700 }
];
let result = getBudgets.reduce((acc, getBudget)=> acc + getBudget.budget, 0)
console.log(result)



//Question 2:
let countLetters = str => {
return str.split('').reduce((total, letter) => {
total[letter] ? total[letter]++ : total[letter] = 1;
return total;
}, {});
};
countLetters("abbcccddddeeeee");

//Question 3:
function decode(str) {
return str.split(" ").map(item => [...item].reduce((ascii,x) => ascii + Number(x), 0)).map(ascii => String.fromCharCode(ascii)).join("")
}
decode("361581732726247521644353 4161492813593986955 84654117917337166147521")
decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
