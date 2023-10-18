/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers (a, b) {
//     return a + b;
// }

// let sum = addTwoNumbers(7, 10);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b)  => {
    return a + b;
}

let sum = addTwoNumbers(7, 10);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns

const saySomething = message => console.log(message);
saySomething("Hello!")

const sayHello = () => console.log("Hiya");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `
    <p>You've got a new message</p>
    `
)
console.log(returnMultipleLines());