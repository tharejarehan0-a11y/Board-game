let now = new Date(); //This creates a new date object
console.log(now);

let Jan01_1970 = new Date(0);//This represents 0 seconds from jan 1 1970
console.log(Jan01_1970);

let date = new Date('December 25 2025 12:00');//creates a new date of the passed string
console.log(date);
console.log(now.getFullYear());//gets year
console.log(now.getDate());//gets date
console.log(now.getTimezoneOffset());//get timezone offset
