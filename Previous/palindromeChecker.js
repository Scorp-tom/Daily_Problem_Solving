function palindromeChecker(inputString){
    let reversedString = inputString.split("").reverse().join("");
    return inputString === reversedString ? "Given String is a Palindrome" : "Given String isn' a Palindrome";
}

function isPalindrome(inputStr){
    let reversedStr = "";
    for(i=0; i<=inputStr.length-1;i++){
        reversedStr += inputStr.charAt(inputStr.length - i - 1);
    }
    return inputStr === reversedStr ? "Given String is a Palindrome" : "Given String isn't a Palindrome"
    // return reversedStr;
}

function isPalindrome2(inputStr){
    
    for(i=0; i<=inputStr.length/2;i++){
        if(inputStr[i] !== inputStr[inputStr.length-1-i]) return false;
        else return true;
    }
    // return inputStr === reversedStr ? "Given String is a Palindrome" : "Given String isn't a Palindrome"
    // return reversedStr;
}

function isPalindrome3(inputStr){
    inputStr = inputStr.toLowerCase();
    let start = 0;
    let end = inputStr.length - 1;
    for(start; start<end; start++, end--){
        if(inputStr[start] !== inputStr[end-start]) return false;
        else return true;
    }
    // return inputStr === reversedStr ? "Given String is a Palindrome" : "Given String isn't a Palindrome"
    // return reversedStr;
}

console.log(palindromeChecker("MOM"));
console.log(isPalindrome3("Madam"));
