//Getters and setters
const course = {
    name:'Javascript for Beginners',
    duration: '3 hours',
    get details(){//this is when you access the function it can be accessed as a property
        return `${this.name} is ${this.duration}`;
    },
    set details(value){//this is when you need to update the properties
        if (typeof value !== 'string'){//one way of throwing an error
            throw new Error(`Value, ${value} is not a string`)
        }
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

console.log(course.details);


//try and catch

try {
    course.details = 54;
}
catch(e){
    console.log(e);
}

//local and global scope
//local scope is within a block and not outside the block and is not accessible outside
//global scope is everywhere accessible
