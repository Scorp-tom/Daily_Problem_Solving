function isPrime(n) {
  console.log(`Sq. root of ${n} is ${Math.sqrt(n)}`);

  if (n <= 1) return false; // 0 and 1 are not prime
  if (n === 2) return true; // 2 is the only even prime
  if (n % 2 === 0) return false; // exclude other even numbers

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeNumbersUpTo(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(primeNumbersUpTo(30));
// Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
