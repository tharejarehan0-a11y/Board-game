//This is how you declare a function
//function is a named piece of code
//parameter variables all the variables placed in the paranthesis 

function sayHi(name){
    console.log('Hi ' + name);
}

// This is how you call a function
// it allows us to reuse our code again and again
sayHi('Rehan');

function multiply(num1,num2){
    return num1 * num2;
}

console.log(multiply(2,2));

// function multiply(num1,num2){
//     return product = num1 * num2; this will return undefined as no explicit variable is with return
// }