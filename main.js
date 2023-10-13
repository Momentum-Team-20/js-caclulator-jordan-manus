console.log('connected');

let display = document.querySelector('#display');
let mainContainer = document.querySelector('.bottom');
let string = "";

let newDisplay = 5;
display.innerText = 'hello';

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
        string += operator;
        console.log(`this is the string: ${string}`);

    })
}


// function to assign values to button
// function defineValueToButton(element) {
//     switch()
// }




// how to clear the calculator: element_name.remove();