function factorial(inputVar){
    if(inputVar<0){
        return "Error: Factorial is not defined for negative numbers";
    }
    let result = 1;
    for(i=inputVar;i>0;i--){
        result *= i;
    }
    return result;
}

function reccursionFactorial(inputNumber){
     if(inputNumber<0){
        return "Error: Factorial is not defined for negative numbers";
    }

    if(inputNumber===1 || inputNumber===0){
        return 1;
    }

    return inputNumber * reccursionFactorial(inputNumber-1);

}

// console.log(factorial(0));
console.log(`Reccursioin Approach || Factorial of 5 : ${reccursionFactorial(5)}`);

