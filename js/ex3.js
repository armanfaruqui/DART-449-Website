console.log("cheese")

let button = document.getElementById("button");
let heading = document.getElementById("heading");
let chaosAmount = 0;
let query = document.querySelectorAll("p");

button.addEventListener("click", addChaos);


console.log(query)

function addChaos(){
   chaosAmount++
   console.log(chaosAmount)
   
   if (chaosAmount === 1){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "1em";
    }
   }

   if (chaosAmount === 2){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "0.8em";
    }
   }

   if (chaosAmount === 3){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "0.6em";
    }
   }

   if (chaosAmount === 4){
    for (let i=0; i < query.length; i++){
        query[i].style.backgroundColor = "black";
    }
   }

   if (chaosAmount === 5){
    for (let i=0; i < query.length; i++){
        query[i].style.backgroundColor = "";
        query[i].innerText = "YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | YOU ARE BEING WATCHED | "
    }
   }

   if (chaosAmount === 6){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "0.8em";
    }
   }

   if (chaosAmount === 7){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "1em";
    }
   }

   if (chaosAmount === 8){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "1.2em";
    }
   }

   if (chaosAmount === 9){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "1.4em";
    }
   }

   if (chaosAmount === 10){
    for (let i=0; i < query.length; i++){
        query[i].style.fontSize = "1.6em";
        query[i].style.color = "rgb(255, 0, 0)";
    }
   }
}