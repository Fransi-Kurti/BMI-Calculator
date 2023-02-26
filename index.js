const btnEl = document.getElementById("btn");

function calculateBMI(){
    const heightInputValue = document.getElementById("height-input").value;
    const weightInputValue = document.getElementById("weight-input").value;
    console.log(heightInputValue, weightInputValue);
}


btnEl.addEventListener("click", calculateBMI);