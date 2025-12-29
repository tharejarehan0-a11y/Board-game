let numbers = [3,6,6,3,2,9,46,87,90,99,23]

function even(arr){
    for (const element of arr) {
        let eve = element % 2
        if (eve === 0){
            console.log(element)
        }
    }
}

function odd(arr){
    for (const element of arr) {
        let eve = element % 2
        if (eve !== 0){
            console.log(element)
        }
    }
}

odd(numbers)