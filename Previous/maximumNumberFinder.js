function maximumNumberFinder(myArray){
    if(!myArray || myArray.length === 0) throw new Error("Array is empty or null");
    let max = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max= myArray[i];
        }
    }
    return max;
}

let Arr1 = [1, 12, 3, 4, 5];

function maximumNumberFinder2(myArray){
    if(!myArray || myArray.length === 0) throw new Error("Array is empty or null");
    const max = Math.max(...myArray);
    return max;
}


// let Arr1 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
console.log("Using Math.max() method: ", maximumNumberFinder2(Arr1));