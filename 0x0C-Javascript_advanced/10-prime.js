#!/usr/bin/node

const checkPrime = (number) => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return true;
}

const countPrimeNumbers = () => {
    let count = 0
    for (let i = 2; i <= 100; i++)
        if (checkPrime(i)) count++;
    return count;
}

const start = performance.now()
for (let i = 0; i < 100; i++)
    countPrimeNumbers();

console.log(`Execution time of printing countPrimeNumbers was ${performance.now() - start} milliseconds.`)

