//every and some method
const numbers = [2,4,6,8,10];
const areAllEven = numbers.every(number => {//checks if each element satisfies a certain condition
    return number % 2 === 0;
});
console.log('areAllEven: ' + areAllEven);
const hasOneEvenNumber = numbers.some(number =>{//checks if any element satisfies a certain condition
    return number % 2 === 0;
});

console.log(hasOneEvenNumber);

//filter method
//filters an array and returns a new array with the filtered numbers
let numbers2 = [2,3,4,54,5,56,]
const evenNumbers = numbers2.filter(number =>{
    return number % 2 === 0;
})
console.log(evenNumbers)
const employees = [
    {
        id:1,
        name:'james',
        role:'Developer'
    },
    {
        id:2,
        name:'harry',
        role:'Designer'
    },
    {
        id:3,
        name:'rehan',
        role:'Developer'
    }
]
const developers = employees.filter(employee =>{
    return employee.role === 'Developer';
})
console.log(developers);

//map method
const numbers3 = [ 0 ,3 ,5,6,4,634];
const squaredNumbers = numbers3.map(num => num*num);
console.log(squaredNumbers);
const chars = ['a','b','c','d']
const uppercaseChars = chars.map(character => character.toUpperCase());
console.log(uppercaseChars);


//reduce method
const numbers4 = [1,23,53,645,453452];
let sum = 0
