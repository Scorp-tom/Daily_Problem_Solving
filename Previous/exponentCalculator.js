function exponentCalculator(inputNumber, exponent){
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= inputNumber;
    }
    return result;
}

function exponentCalculator2(inputNumber, exponent){
    let result = 1;
    if(exponent<=0) return 1;
    return inputNumber* exponentCalculator2(inputNumber,exponent-1);
}

console.log(exponentCalculator2(4,2));
