function reverseTheString(inputString){
    if(typeof inputString !== 'string'){
        return "Error: Input is not a string.";
    }
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--){
        reversedString += inputString[i];
    }
    return reversedString;
}

function reverseTheString2(inputString){
    const splitted = inputString.split("");
    const reversedString = splitted.reverse().join("");
    // console.log(reversedString);
    return reversedString;
    
}

function joinArray(inputArray){
    // const splitted = inputString.split("");
    const jointArray = inputArray.join("");
    // console.log(reversedString);
    return jointArray;
    
}

// console.log(reverseTheString(1223345));
// console.log(reverseTheString("Tushar"));
let myArray = new Array ("Apple"," ","is my"," ","favourite "," ","fruit");
// console.log(reverseTheString2("Tushar"));
console.log(joinArray(myArray));

