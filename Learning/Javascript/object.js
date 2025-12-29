//These are objects
//a collection of keyvalue pairs
let course = {
    name: 'Javascript',
    hours: 3
};

//displaying an object
console.log(course);

//Ways of displaying the values of different keys

//Using the dot notation
// console.log(course.name);
// console.log(course.hours);

//Using the bracket notation
// console.log(course['name']);

//way using the bracket notation and dot notation and changing the variable
// course['name']= 'Javascript 101';
// course.hours = 4
// console.log(course);

//This is an example showing that the keys in the object are stored as strings 
// here the key is stored in a variable and the variable is put in the bracket notation in place of the key itself
// let property = 'hours';

// console.log(course[property]);


// Objects and methods

const cat = {
    name:'billu',
    food:'chuhe',
    breed: 'chitti',
    meow(){
        console.log('billu ki meow');
    },
    go(){
        console.log('billu bhag gya');
    }
}
//functions in an objects are called methods like here are meow and go 
//and we call method like this
cat.go()
cat.meow()