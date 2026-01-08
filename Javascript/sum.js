let myArray = [1, 4, 2, 3, 5, 6]


function sumfac(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

result = sumfac(myArray);
console.log(result);