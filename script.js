console.log("home")

let exercises = document.getElementById("exercises")
let links = document.getElementById("exerciseLinks")

exercises.addEventListener("mouseover", function(){
    links.style.opacity = "1";
})