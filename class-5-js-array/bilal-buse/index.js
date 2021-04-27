// Pairs: Buse Şentürk && Belal Awad

// Challange 1
function reverseLetters (word){
        let reversed = "";
      
        for (let i = 0; i < word.length; i++){
          if (word.charAt(i) == word.charAt(i).toUpperCase()){
            reversed += word.charAt(i).toLowerCase();
          }
          else {
            reversed += word.charAt(i).toUpperCase();
          }
        }
        console.log(reversed);
        return reversed;
}
reverseLetters("Happy Birthday");
reverseLetters("MANY THANKS");
reverseLetters("sPoNtAnEoUs");
console.log("---------------------------------------------------");

// Challange 2
function numberOfUsers (users){
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
      
numberOfUsers(["Liz"]);
numberOfUsers(["Liz", "Ammar"]);
numberOfUsers(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]);
console.log("---------------------------------------------------");