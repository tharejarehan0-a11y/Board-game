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

//methods of removing elements
let numbers2 = [56,66,76,86,96,106,116]
const lastElement = numbers.pop();//removes the last element from the array and returns it
console.log(lastElement);

const firstElement = numbers.shift();//removes the first element from the array and returns it
console.log(firstElement);

const middleElement = numbers.splice(1,1);//first argument from which index to remove and the second how many to remove
console.log(middleElement);

//emptying an array
let numbers3 = [0,0,34,63,34,34,25,234];

//first way 
while(numbers.length>0){
    numbers.pop();
}
console.log(numbers);
//secondway
numbers2.length = 0;
console.log(numbers2);
//third way
const deletedNumbers = numbers3.splice(0,numbers.length);
console.log(deletedNumbers);
//fourth way
let number4 = [0,3,4]
number4 = []
console.log(number4)

const exampleNumbersA = [1,2,3];
const exampleNumbersB = [4,5,6];
//combining two array
const combinedArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combinedArray);
//slicing an array
const firstSlice = combinedArray.slice(0,4);
console.log(firstSlice);
//combining two arrays using the spread operator
let newcombinedarray = [...exampleNumbersA, 9 , ...exampleNumbersB];
console.log(newcombinedarray);

exampleNumbersA.forEach((num5)=>{ // u can add a second argument index which will return the index also of each value
    console.log(num5);
})
//two loops can be used for array for of and for each 
const joinedNumbers = exampleNumbersA.join();//returns the string of all the elements
console.log(joinedNumbers);
const courseName = 'Javascript for Beginners';
const parts = courseName.split(' ');// it will perform a split whenever it encounters a space in the string from left to right
console.log(parts);//returns the array of all the parts
const urlSlurg = parts.join('-');//will join all the parts with - 
console.log(urlSlurg);

//we can also do method chaining like numbers.toLowerCase().join().split() it will do all at once to the datatype


//sort method
let chars = ['c','d','b','a'];
chars.sort();//sorts the elements in ascending order
console.log(chars);
chars.reverse();//reverse the elements in reversed order
console.log(chars);

employees.sort((a,b)=>{
   const lowerCaseA = a.name.toLowerCase();
   const lowerCaseB = b.name.toUpperCase();
   
   if (lowerCaseA < lowerCaseB) return -1;
   if (lowerCaseA > lowerCaseB) return 1;
   return 0;
});
console.log(employees);



