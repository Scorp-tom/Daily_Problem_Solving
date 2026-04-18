function sumOfAllDigits(inputNum) {
    if(inputNum<0)throw new RangeError("Number must be a positive integer");
    let inputNumAsString = inputNum.toString();
    let inputNumSplitted = inputNumAsString.split("");

  let sum = 0;
  inputNumSplitted.forEach(element => {
    sum += parseInt(element);
  });
  return sum;
}


function calSumOfDigits2(inputNum){
  if(inputNum<0)throw new RangeError("Number must be a positive integer");
  let number = inputNum;
  let sumOfAllDigits = 0;
  while(number > 0){
    let lastDigit = number%10;
    number = Math.floor(number/10);
    sumOfAllDigits += lastDigit;
  }
  return sumOfAllDigits;
}

console.log(calSumOfDigits2(59));
