/*

 https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
 "Core Interfaces in the DOM"
 
 The following is a brief list of common APIs in web and XML page scripting using the DOM:

document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
document.querySelector(selector)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.scrollTo()
 */

// Challenge 1

let title = document.querySelector(".challengeOne");
title.style.textAlign = "center";



// Challenge 2

function increaseCounter() {
    // console.log('hello')
    if (document.getElementById("myText").value == ""){
        let stringValuebySpan = document.getElementById("resCountbutID").innerHTML
        let intValueBySpan = parseInt(stringValuebySpan)
        intValueBySpan += 1
        document.getElementById("resCountbutID").innerHTML = intValueBySpan
    }
    else{
        const inputVal = document.getElementById("myText").value 
        let numberInputVal = parseInt(inputVal)
        let resCount = document.getElementById("resCountbutID").innerHTML
        let numberResCount = parseInt(resCount)
        numberResCount += numberInputVal 
        document.getElementById("resCountbutID").innerHTML = numberResCount
    }
}
    function decreaseCounter(){
        if (document.getElementById("myText").value == ""){
            let stringValuebySpan = document.getElementById("resCountbutID").innerHTML
            let intValueBySpan = parseInt(stringValuebySpan)
            intValueBySpan -= 1
            document.getElementById("resCountbutID").innerHTML = intValueBySpan
        }
        else{
            const inputVal = document.getElementById("myText").value 
            let numberInputVal = parseInt(inputVal)
            let resCount = document.getElementById("resCountbutID").innerHTML
            let numberResCount = parseInt(resCount)
            numberResCount -= numberInputVal 
            document.getElementById("resCountbutID").innerHTML = numberResCount
        }
    }


    function isInputNumber(evt){
                
        let ch = String.fromCharCode(evt.which);
                    
        if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
        }
                    
    }


// Challenge 3
    const ul = document.getElementById("definitelyUL")
    function showListOfElements(){
    const TEAM_MEMBERS = ["Ammar","Halit","Muhannad","Jaime","Derya", "Louis"];

    if(ul.children.length === 0){
        for(let i = 0; i < TEAM_MEMBERS.length; i++){
            let li = document.createElement("li")
            li.innerHTML = TEAM_MEMBERS[i].toString();
            ul.appendChild(li);
        }
    }
    else{
        return;
    }
}