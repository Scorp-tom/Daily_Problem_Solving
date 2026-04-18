function largestNumber(inputArr){
    //Array Length Validation
    if (!inputArr || inputArr.length === 0) throw new Error ("length fo the array should be more than 0 or array shouldn't be null ");
    //All elements check
    inputArr.forEach(element => {
        console.log(element);
        if(typeof(element) !== "number") throw new Error ("All the items in an array should be number only");
        
    });
    let maximum = inputArr[0];
    for(let i = 0; i<inputArr.length ;i++){
        if(maximum<inputArr[i]) maximum=inputArr[i];
    }
    return maximum;
}

function largestNumber2(inputArr){
    let maxNumber = Math.max(...inputArr);
    return maxNumber;
}

console.log(largestNumber2([2,3,4,59,6,11,3,56,7]));