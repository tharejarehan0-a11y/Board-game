//This is how you declare a function
//function is a named piece of code
//parameter variables all the variables placed in the paranthesis 

function sayHi(name){
    console.log('Hi ' + name);
}

// This is how you call a function
// it allows us to reuse our code again and again
sayHi('Rehan');

function multiply(num1,num2){//This will be hoisted to the top
    return num1 * num2;
}

console.log(multiply(2,2));

// function multiply(num1,num2){
//     return product = num1 * num2; this will return undefined as no explicit variable is with return
// }

const n = multiply;

console.log(n(3,3)) //this shows that functions are objects

function programmer(name){
    this.name;
    this.writescode = function(){
        console.log('codes in js')
    }
}

console.log(programmer('Rehan'));
console.log(programmer.length)
console.log(programmer.constructor);

const desginer = new function(name){// This will not be hoisted to the top
    this.name;
    this.writescode = function(){
        console.log('yes')
    }
}
desginer.writescode()

//arguments keyword can be logged to get an object with all the parameters passed it lacks map and reduce

//the rest operator
let course = {
    name:'Javascript for Beginners',
    duration:'3 hours'
}

let newCourse = {
    ...course,//spread operator allows us to copy an object
    name:'Javascript Adv'
};
console.log(newCourse);

function product(...args/*this is the rest operator that allows us to intake variable number of parameters in a function*/){
    return args.reduce((a,v)=>{
        return a*v;
    },1)
}
console.log(product(1,34,646,534,3453));

function writeCode(language='Javascript',tool='vscode'/*here we have defined default values */){
    console.log(`write code in ${language} in ${tool}`);
}
writeCode('Javascript');
writeCode('C#');
writeCode();//it will return undefined so we will define a default value
