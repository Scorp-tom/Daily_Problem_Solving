//Recursive approach
function recursiveFactorial(inputNumber){
    if(inputNumber<0) throw new Error("Input Number must be greater than or equal to 0")
    if(typeof(inputNumber) === "string") throw new Error("Input Number must be a number greater than or equal to 0")
    let result = 1;

    if(inputNumber === 0 || inputNumber === 1) return 1;

    return inputNumber * recursiveFactorial(inputNumber-1);
}


// function calcFactorial(inputNumber){
//     if(inputNumber<0) throw new Error("Input Number must be greater than or equal to 0")
//     if(typeof(inputNumber) === "string") throw new Error("Input Number must be a number greater than or equal to 0")
//     let result = 1;
//     for(let i = 1; i<=inputNumber; i++){
//         result *= i;
//     }
//     return result;
// }

console.log(recursiveFactorial(5));