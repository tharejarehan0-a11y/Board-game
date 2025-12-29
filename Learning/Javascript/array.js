let productColors = ['blue','green'];

// console.log(productColors[0]); this is how we access the elements in an array and it starts with 0 and then 1,2,3 and so on
// productColors[0] = 42; this is how we change any value of a key
// console.log(productColors); this shows us that an array is objects and it is a data structure which allows us to store a list of data
// console.log(productColors.length); this is how u come to know about the length of the array 

//methods for arrays

const numbers = [5 , 4, 3 , 2, 1]

numbers.push(7); //adds 7 at the end of the array
numbers.push(8,9); //it can accept multiple elements
numbers.unshift(150); //adds 150 at the start of the array
numbers.unshift(150,2545); //it can also accept multiple elements
numbers.splice(2,0,34,35); // first argument tells at what index u want to add elements second argument tells us how many elements we want to delete and the other elements tells us that which elements we want to add
console.log(numbers);

const indxOfTwo = numbers.indexOf(2);//searches for an element in the array from left to right 
console.log(indxOfTwo);//returns the index where it finds it

const lastIndexOfThree = numbers.lastIndexOf(3);//searches for an element in the array from right to left
console.log(lastIndexOfThree)//returns the lastindex where it fins it

// const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexofTen)//if it gives -1 then this means it is not in the array
//we can also use !numbers.include(10) for this

const employees = [
    {
        id:1,
        name:"Jim"
    },
    {
        id:2,
        name:'Rehan'
    },
    {
        id:3,
        name:'Shubh'
    }
]
// const employee = employees.find(function(e){
//     return e.name === 'Jim'
// });//callback function
// console.log(employee);

const add = (num1,num2) =>  num1 + num2;

