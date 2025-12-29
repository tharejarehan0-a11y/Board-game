//ternary operator

let age = 16
const canDrive = age >= 16 ? true:false;
console.log(canDrive)

let points = 110;
const customerType = points > 100 ? 'gold':'silver';
console.log(customerType);

//conditional statements

let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash>=priceOfChocolate? true:false;
console.log(canBuyChocolate);

if (canBuyChocolate==true){
    console.log('you can buy it')
}else{
    console.log('you can not buy')
}

// you can also use 
// else if(){
//
//    }


//switch case statements

let job = 'Software Developer';

switch (job) {
    case 'Software Developer':
        console.log('nice meeting you')
        break;

    default:
        console.log('sorry can not recoganize you')
        break;
}