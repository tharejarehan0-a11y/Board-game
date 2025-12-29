function fizzbuzz(num){
    let fivediv = num % 5;
    let threediv = num % 3;
    if (fivediv === 0 && threediv === 0){
        console.log('FizzBuzz');
    }
    else if (fivediv === 0){
        console.log('Buzz');
    }
    else if (threediv === 0){
        console.log('Fizz');
    }
    else{
        console.log(num);
    }
}
fizzbuzz(7)