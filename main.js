function add (number1, number2){
    return Number(number1) + Number(number2)
}
function subtract (number1, number2){
    return Number(number1) - Number(number2)
}
function multiply (number1, number2){
    return Number(number1) * Number(number2)
}
function divide (number1, number2){
    return Number(number1) / Number(number2)
}


function operate(operator, number1, number2){
    if (operator === '+'){
       return add (number1, number2)
    } else if (operator === '-'){
        return  subtract (number1, number2)
    } else if (operator === '*'){
        return multiply (number1, number2)
    } else if (operator === '/'){
        return divide (number1, number2)
    }
}

const calculatorDispaly = document.querySelector('.result')
let operator = ""
let number1 = ""

function displayNumber(element){
    calculatorDispaly.innerText += element.innerText;
}

function getOperatorAndNumber1(element){
    number1 = calculatorDispaly.innerText
    console.log(number1);
    operator = element.innerText
    console.log(operator);
    calculatorDispaly.innerText = ""
}

function operateAndGetNumber2(element){
    number2 = calculatorDispaly.innerText
    console.log(number2);
    calculatorDispaly.innerText = operate(operator, number1, number2)
}

function clearDisplay(){
    calculatorDispaly.innerText = ""
    number1 = ""
    number2 = "" 
    operator = ""
}