let square = document.getElementById("color"); // Colored square
let color = getComputedStyle(square).backgroundColor // Color of square
let input = document.getElementById("input"); // Input field
let submit = document.getElementById("submit"); // Submit button
let response = document.getElementById("response"); 

let colors = [
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)',
    'rgb(255, 255, 0)',
    'rgb(255, 0, 255)',
    'rgb(112, 0, 240)',
]

submit.addEventListener("click", changeColor);
console.log(getComputedStyle(square).backgroundColor)

function changeColor(){
    checkAnswer();
    let newColor = colors[Math.floor(Math.random()*colors.length)]; 
    square.style.backgroundColor = newColor;
    console.log(input.value)
    response.style.opacity = "1"
}

function checkAnswer(){
    let currentColor = getComputedStyle(square).backgroundColor
    let answer = input.value
    if (currentColor === 'rgb(255, 0, 0)' && input.value === "red"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else if (currentColor === 'rgb(0, 255, 0)' && input.value === "green"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else if (currentColor === 'rgb(0, 0, 255)' && input.value === "blue"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else if (currentColor === 'rgb(255, 255, 0)' && input.value === "yellow"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else if (currentColor === 'rgb(255, 0, 255)' && input.value === "pink"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else if (currentColor === 'rgb(112, 0, 240)' && input.value === "purple"){
        response.innerHTML = "correct"
        response.style.color = "rgb(0, 255, 0)"
        console.log("correct")
    }
    else{
        console.log("incorrect")
        response.innerHTML = "incorrect"
        response.style.color = "rgb(255, 0, 0)"
    }
}