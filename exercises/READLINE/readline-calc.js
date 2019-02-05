var ask = require("readline-sync");

const adds = (num1, num2) => num1 + num2;
const multipy = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const subtract = (num1, num2) => num1 - num2;
let result;
let funcsArray = [ "add", "mul", "div", "sub"];

let num1 = ask.questionInt("Please enter your first number. ")
let num2 = ask.questionInt("Please enter your second number. ")
let operation = ask.keyInSelect(funcsArray, "Please enter the operation to perform: ")

switch (operation) {
    case 0:
        result = adds(num1, num2);
        break;
    case 1:
        result = multipy(num1, num2);
        break;
    case 2:
        result = divide(num1, num2);
        break;
    case 3:
        result = subtract(num1, num2);
        break;
    default: 
        console.log("We're having technical difficulties. Please try again.")
}

console.log(`The result is: ${result}`)