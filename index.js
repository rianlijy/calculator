let first = "";
let second = "";
let operator = "";
let sum = 0;
let firstCalc = true;
let firstPeriod = true;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){
    if(operator === "+"){
        return add(num1, num2);
    }
    else if(operator === "-"){
        return subtract(num1, num2);
    }
    else if(operator === "x"){
        return multiply(num1, num2);
    }
    else if(operator === "/"){
        return divide(num1, num2);
    }
}

function reset(){
    first = "";
    second = "";
    operator = "";
    sum = 0;
    firstCalc = true;
}

const btn = document.querySelector(".buttons");
const display = document.querySelector(".calcDisplay");
btn.addEventListener("click", (event)=>{
    const buttonText = event.target.textContent;
    if(!isNaN(buttonText) || buttonText === "."){
        if(buttonText === "."){
            if(firstPeriod === false){
                return;
            }
            firstPeriod = false;
        }
        second += buttonText;
        display.textContent = second;
    }
    else if(buttonText === "+" || buttonText === "-"|| buttonText === "x"|| buttonText === "/"){
        if(firstCalc === false){
            if(second === "0"){
                display.textContent = "Nice Try!";
                reset();
                return;
            }
            sum = Math.round(operate(Number(first), Number(second), operator)*1000)/1000;
            display.textContent = sum;
            first = sum;
        }else{
            first = second;
            display.textContent = buttonText;
        }
        second = "";
        operator = buttonText;
        firstCalc = false;
    }
    else if(buttonText === "CLEAR"){
        display.textContent = "";
        reset();
    }
    else if(buttonText === "="){
        if(second === "0"){
            display.textContent = "Nice Try!";
            reset();
            return;
        }
        if(first === ""){
            display.textContent = second;
            return;
        }
        sum = Math.round(operate(Number(first), Number(second), operator)*1000)/1000;
        display.textContent = sum;
        reset();
    }
})