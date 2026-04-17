let numbers = [1, 2, 3, 4];

let total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total); // 10
