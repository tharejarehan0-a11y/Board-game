const name =  'Steven';//This is a string litral
console.log(typeof name);

const anotherName = new String('Joe');
console.log(typeof anotherName); //This is an object

let sentence = "A new sentence";
const doesIncludeNew = sentence.includes('new');//checks the word if it is there in the string with which this method is being used

let startwith = sentence.startsWith('A');//checks if the sentence starts with the passed argument
console.log(startwith);
let endwith = sentence.endsWith('A');//checks if the sentence ends with the passed argument
console.log(endwith);

let updatedSentence = sentence.replace('new','short')//creates a new string by replacing the passed argument with the new word passed as the argument
console.log(updatedSentence);

const wordsInSentence = sentence.split("  ");//creates a new string and adds space or any word in the words in the sentence
console.log(wordsInSentence);

let email = 'TesTEmail@gmail.com';
let lowerCaseEmail = email.toLowerCase();//creates a new string by lowercasing the string
let upperCaseEmail = email.toUpperCase();//creates a new string by uppercasing the string

//Template literals

let firstName = 'Steven';
let lastName = 'Garcia';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);
//The correct and recommended practice

let fullName = `${firstName} ${lastName}`
console.log(fullName);