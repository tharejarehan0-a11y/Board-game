function cat(name,breed,feed){
    // there is a special function this= {};
    // you can add properties to this function

    this.name = name;
    this.breed = breed;
    this.feed = feed;

    this.eat = function(){
        console.log(this.name +' eat it');
    }

    this.meow = function(){
        console.log(this.name + ' meow');
    }
    //returns everything with this to the object created by new
}

const billu = new cat('billu','chitta','chuha') //new is the keyword that is used here as it creates an empty object which has all the values of this.value pointed in it


//objects in js are dynamic which means we can add or remove any property to it at any time

console.log(billu);
billu.favFood = 'fish';
console.log(billu);

billu['favTime'] = 'evening';
console.log(billu);

delete billu.breed;
console.log(billu)

billu.fly = function(){
    console.log('billu is flying');
}

billu.fly();
//we can change it's properties but not reassign it when used with const
//every object in js has a constructor function
// whenever we create a new object we say that we instantiated an object

//the built in property of constructor can be accessed either by dot notation or by bracket notation

// const person = {
//     name:'Rehan'
// }
// console.log(person.constructor)

//every object has a constructor property which refers to the constructor function used to instantiate the object
