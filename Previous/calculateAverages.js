function calculateAverages(inputArray){
    
    let sum = 0;
    let noOfObservation = inputArray.length;
    // let totalOfObservations = 0;
    let average = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if(!typeof inputArray[i] === 'number' || inputArray[i] === null || inputArray[i] === undefined || !Number.isInteger(inputArray[i]) || inputArray[i]<0){
            throw new Error("Number should be only positive integers")
        }
        sum += inputArray[i];
        // totalOfObservations += inputArray[i];
        average = sum / noOfObservation;
    }
    return average;
}

let myArr = new Array(4,4,4);

console.log(calculateAverages(myArr));
