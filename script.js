function add(a,b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply(a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide(a,b){
    return parseFloat(a)/parseFloat(b);
}

let num1 = document.querySelector('#number1');
let operator = document.querySelector('#operator');
let num2 = document.querySelector('#number2');
let answerZone = document.querySelector('#answer');

function operate(n1,op,n2){
    switch(op){
        case '+':
            return add(n1,n2);
            break;
        case '-':
            return subtract(n1,n2);
            break;
        case '*':
            return multiply(n1,n2);
            break;
        case '/':
            return divide(n1,n2);
            break;
    }
}

const numbers = document.querySelectorAll('#number');

numbers.forEach(number => {
    number.addEventListener('click', event => {
        getNumbers(number.textContent);
    });
});

function getNumbers(value){
    if(operator.textContent==''){
        num1.textContent += value;
    }
    else{
        num2.textContent += value;
    }
}

const operators = document.querySelectorAll('#operatorBtn');

operators.forEach(operator => {
    operator.addEventListener('click', event => {
        getOperator(operator.textContent);
    })
});

function getOperator(value){
    if(num1.textContent != '' && num2.textContent == ''){
        operator.textContent = value;
    }
    else if(num1.textContent != '' && num2.textContent != ''){
        let res = operate(num1.textContent, operator.textContent, num2.textContent);
        num1.textContent = res;
        answerZone.textContent = res;
        operator.textContent = value;
        num2.textContent = '';
    }
    else if(num1.textContent == '' && answerZone.textContent != ''){
        num1.textContent = answerZone.textContent;
        operator.textContent = value;
    }
}

const equalsBtn = document.querySelector('#equals');

equalsBtn.onclick = function(){
    if(num1.textContent != '' && operator.textContent != '' && num2.textContent != ''){
        let answer = operate(num1.textContent, operator.textContent, num2.textContent);
        answerZone.textContent = answer;
        num1.textContent = '';
        operator.textContent = '';
        num2.textContent = '';
    }
}

const clearBtn = document.querySelector('#clear');

clearBtn.onclick = function(){
    num1.textContent = '';
    operator.textContent = '';
    num2.textContent = '';
    answerZone.textContent = '';
}