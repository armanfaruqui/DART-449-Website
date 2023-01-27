console.log("In ex 1");

let heading = document.getElementById("heading");
let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")
let feelings = ["hopeful", "anxious", "content", "excited", "optimistic", "exhausted", "joyful", "miserable", "rich", "poor", "powerful", "small", "old", "young", "blessed", "grateful", "frustrated", "restless"]

console.log(heading);

heading.innerText = feelings[Math.floor(Math.random()*feelings.length)];   

button1.addEventListener("click", function(){
    heading.innerText = feelings[Math.floor(Math.random()*feelings.length)];  
})

button2.addEventListener("click", function(){
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    if (randomNum === 1){
        heading.style.fontFamily = "Arial"
    }
    else if (randomNum === 2){
        heading.style.fontFamily = "Verdana"
    }
    else if (randomNum === 3){
        heading.style.fontFamily = "Georgia"
    }
    else if (randomNum === 4){
        heading.style.fontFamily = "Impact"
    }
    else if (randomNum === 5){
        heading.style.fontFamily = "cursive"
    }
    else if (randomNum === 6){
        heading.style.fontFamily = "serif"
    }
})