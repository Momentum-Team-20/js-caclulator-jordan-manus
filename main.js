// const math = require("mathjs");

console.log('connected');

let display = document.querySelector('.display');
let string = "";



let numbers = document.querySelectorAll('.number');
for (let number of numbers) {
    number.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        number = event.target.innerText;
        string += number;
        console.log(`this is the string: ${string}`);
        setDisplay(number);
    })
}

let operators = document.querySelectorAll('.operator');
for (let operator of operators) {
    operator.addEventListener('click', (event) => {
        console.log(event.target.value);
        operator = event.target.value;
        
        if (operator === '=') {
            string = calculateEquation(string);
        } else {
            string += operator;
        }
        console.log(`this is the string: ${string}`);
    })
}

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (event) => {
    display.innerText = "";
    string = "";
})


function calculateEquation(string) {
    let results = math.evaluate(string);
    console.log(results);
    setDisplay(results);
    return string = results;

}

function setDisplay(results) {
    console.log(`this is results: ${results}`);
    display.innerHTML = "";
    display.innerText += results;
}


