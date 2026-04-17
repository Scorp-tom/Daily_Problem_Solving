function reverseString(myString){
    let resultString ="";
    for(let i=myString.length-1; i>=0 ;i--){
        resultString += myString[i];
    }
    return resultString;
}

function reverseString2(myString){
    let splitted = myString.split("");
    let resultString = splitted.reverse().join("");
    return resultString;
}

function reverseString3(myString){
    let resultString = myString.split("").reverse().join("");
    return resultString;
}

console.log(reverseString3("Tushar"));