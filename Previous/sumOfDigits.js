function sumOfDigits(inputNum) {
  if (typeof inputNum !== "number" || inputNum < 1 || !Number.isInteger(inputNum)) {
    throw new Error("Input must be a positive integer only");
  }

  let sum = 0;
  let myNums = inputNum.toString().split("");
  myNums.forEach((num) => {
    sum += parseInt(num);
  });

  return sum;
}

function sumOfDigits2(inputNum) {
  console.log("This is Optimised approach");
  
  if (typeof inputNum !== "number" || inputNum < 1 || !Number.isInteger(inputNum)) {
    throw new Error("Input must be a positive integer only");
  }

  let sum = inputNum
  .toString()
  .split("")
  .reduce((acc, digit) => acc + parseInt(digit), 0);

  return sum;
}

console.log(sumOfDigits2(1234));
