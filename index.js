const btnEl = document.getElementById("btn");

const bmiResult = document.getElementById("bmi-result");

const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
    const heightInputValue = document.getElementById("height-input").value / 100;
    const weightInputValue = document.getElementById("weight-input").value;

    const bmiValue = weightInputValue / (heightInputValue * heightInputValue);
    
    bmiResult.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Under weight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Normal weight"
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        weightConditionEl.innerText = "Over weight"
    }else if(bmiValue >= 30){
        weightConditionEl.innerText = "Obesity";
    }
    
}


btnEl.addEventListener("click", calculateBMI);