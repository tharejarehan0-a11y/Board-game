//factory functions are such functions that allow us to create an object efficiently but are not recommeded for this

function getcat(name,breed,feed) {
    return {
        name, // we don't use name:name; as js automatically assigns the same value to the key as the as key 
        breed,
        feed,
        eat(){
            console.log("eat it");
        },
        meow(){
            console.log('meow');
        }
    }
}
let firstCat = getcat('billu','chitti','chuhe');
let secondCat = getcat('chikna','kala','kidde');
console.log(firstCat);
console.log(secondCat);

//a better way of doing this is to use constructor functions