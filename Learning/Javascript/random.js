//To get a random number between two values
const num1 = 1;
const num2 = 10;
const random = Math.round(Math.random() * (num2-num1) + num1);
console.log(random);