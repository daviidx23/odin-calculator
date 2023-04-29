function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

console.log(add(4,2));
console.log(subtract(4,2));
console.log(multiply(4,2));
console.log(divide(4,2));

let num1
let operator;
let num2;

function operate(n2,op,n2){
    switch(op){
        case '+':
            add(n1,n2);
            break;
        case '-':
            subtract(n1,n2);
            break;
        case '*':
            multiply(n1,n2);
            break;
        case '/':
            divide(n1,n2);
            break;
    }
}

const numbers = document.querySelectorAll('.numbers > div');

function getNumbers(e,num1,num2){
    if(num1==undefined){
        num1 = e.currentTarget.innerText;
    }
    else {
        num2 = e.currentTarget.innerText;
    }
    console.log(num1);
    console.log(num2);
}

numbers.forEach(number => {
    number.addEventListener('click', getNumbers, {once: true});
    number.addEventListener('click', getNumbers, {once: true});
});
