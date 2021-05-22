// Question 1:
let names = ['Ali', 'Atta', 'Alex', 'John'];
const capitalize  = names.map(name => name.toUpperCase());
console.log(capitalize);

//Question 2:
let str = 'hey girl, lets javascript together sometime';
function swapCase (str) {
let strSplited = str.split(" ");
let test= []
for (let i=0; i < strSplited.length; i++){
if (i %2 === 0){
test[i] =strSplited[i].toUpperCase();
}else{
test[i] = strSplited[i]
}
}
return test.join(" ");
}
let testfunc =swapCase (str);
console.log(testfunc);



// Question 3:
let str = 'hello';
str = str.replace(/[a-z]/gi, function(char) { 
char = String.fromCharCode(char.charCodeAt(0)+1); 
if (char=='{' || char=='[') char = 'a';
return char;
});
console.log(str);
