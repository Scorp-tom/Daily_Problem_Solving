function vowelConsonantCounter(inputStr){
    inputStr = inputStr.toLowerCase().replace(/ /g,"");
    console.log(inputStr);
    
    let vowelCount = 0;
    let ConsonantCount = 0;
    let NumberCount = 0;

    const vowels = "aeiou"
    const consonants = "bcdfghjklmnpqrstvwxyz";

    for (let i = 0; i < inputStr.length; i++) {
        // console.log(inputStr[i]);
        
        if(vowels.includes(inputStr[i])){
            vowelCount++;
        }
        else if(/^[a-z]$/.test(inputStr[i])){
            ConsonantCount++;
        }
        else if(/^[0-9]$/.test(inputStr[i])){
            NumberCount++;
        }
        
        // else if(consonants.includes(inputStr[i])){
        //     ConsonantCount++;
        // }
        
    }

    console.log(`Number of vowles in ${inputStr} are ${vowelCount} and consonants count are ${ConsonantCount}`);
    return {vowelCount, ConsonantCount, NumberCount};
}

console.log(vowelConsonantCounter("Tushar123"))