function multiplicationTable(inputNumber, range){
    if (inputNumber <= 0) throw new Error ("Input number must be a positive integer");
    if (range <= 0) throw new Error ("Range number must be a positive integer");
    for(let i=0; i<=range ; i++){
        console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);
    }
}

function printMultiplicationTable(tableOf, tableTill){
    // if (tableOf <= 0) throw new Error ("Input number must be a positive integer");
    // if (tableTill <= 0) throw new Error ("Range number must be a positive integer");
    if(tableOf<0 || tableTill<0 || typeof tableOf !== "number" || typeof tableTill !== "number") throw new Error ("Input number and range must be positive integers");
    for(let i=tableOf; i<=tableOf*tableTill ; i+=tableOf){
        console.log(i);
    }
}

// console.log(multiplicationTable(5,10));

console.log(printMultiplicationTable(4,10));

