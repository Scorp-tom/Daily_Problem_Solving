function factorsFinder(inputNumber){
    let factors = [];
    if(!/^\d+$/.test(inputNumber.toString())){
        throw new Error("Number should be Integer only");
    }
    // if(!Number.isInteger(inputNumber)){
    //     throw new Error("Number should be Integer only");
    // }
    for (let i = 1; i <= inputNumber; i++) {
        if (inputNumber % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(factorsFinder(8));
