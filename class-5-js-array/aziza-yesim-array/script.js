// Challenge 1
let swapCase = function(letters){
    let newLetters = "";
    for(let i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }
        else {
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}
let text = 'Thank You';
let swappedText = swapCase(text);



// Challange 2
function users (users){
        let chatroomStatus = users.length;
        if (chatroomStatus == 0){
          console.log("no one online");
        }
        else if (chatroomStatus == 1) {
          console.log(users[0] + " online");
        }
        else if (chatroomStatus == 2) {
          console.log(users[0] + " and " + users[1] + " online.");
        }
        else {
          console.log(users[0] + ", " + users[1] + " and " + (chatroomStatus-2) + " more online.");
        }
}
users("");
users(["Liz"]);
users(["Liz", "Ammar"]);
users(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]);
console.log("---------------------------------------------------");
