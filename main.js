// const math = require("mathjs");

console.log('connected');


let string = "";


let numbers = document.querySelectorAll('.number');
for (let number of numbers) {
    number.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        number = event.target.innerText;
        string += number;
        console.log(`this is the string: ${string}`);
    })
}

let operators = document.querySelectorAll('.operator');
for (let operator of operators) {
    operator.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        operator = event.target.innerText;
        
        if (operator === '=') {
            calculateEquation(string);
        }
        string += operator;
        console.log(`this is the string: ${string}`);
    })
}


function calculateEquation(string) {
    let results = math.evaluate(string);
    // results = String(results)
    console.log(results);
    setDisplay(results);
}

function setDisplay(results) {
    let display = document.querySelector('#display');
    console.log(`this is results: ${results}`);
    // display.innerText(results);
    display.innerHTML(results);
}

// how to clear the calculator: element_name.remove();

