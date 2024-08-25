import React from 'react';

function NumberDisplay() {
  // Task 1: Print numbers from 1 to 10
  const numbers = [];
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  // Task 2: Print odd numbers less than 100
  const oddNumbers = [];
  for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
  }

  // Task 3: Print the multiplication table with 7
  const tableOfSeven = [];
  for (let i = 1; i <= 10; i++) {
    tableOfSeven.push(`7 x ${i} = ${7 * i}`);
  }

  // Task 4: Print all multiplication tables from 1 to 10
  const tables = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      tables.push(`${i} x ${j} = ${i * j}`);
    }
    tables.push('\n');
  }

  // Task 5: Calculate the sum of numbers from 1 to 10
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }

  // Task 6: Calculate 10!
  let factorial = 1;
  for (let i = 1; i <= 10; i++) {
    factorial *= i;
  }

  // Task 7: Calculate the sum of even numbers greater than 10 and less than 30
  let evenSum = 0;
  for (let i = 12; i < 30; i += 2) {
    evenSum += i;
  }

  // Task 8: Convert Celsius to Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  const fahrenheitFromCelsius = celsiusToFahrenheit(30); // Example conversion

  // Task 9: Convert Fahrenheit to Celsius
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
  const celsiusFromFahrenheit = fahrenheitToCelsius(86); // Example conversion

  // Task 10: Calculate the sum of numbers in an array of numbers
  const arraySum = (arr) => arr.reduce((a, b) => a + b, 0);
  const exampleArray = [1, 2, 3, 4, 5];
  const sumOfArray = arraySum(exampleArray);

  // Task 11: Calculate the average of the numbers in an array of numbers
  const arrayAverage = (arr) => arr.length ? (arraySum(arr) / arr.length) : 0;
  const averageOfArray = arrayAverage(exampleArray);

  // Task 12: Create a function that returns only positive numbers from an array
  const positiveNumbers = (arr) => arr.filter(num => num > 0);
  const positiveArray = positiveNumbers([-1, 2, -3, 4, 5]);

  // Task 13: Find the maximum number in an array of numbers
  const maxNumber = (arr) => Math.max(...arr);
  const maxInArray = maxNumber(exampleArray);

  // Task 14: Print the first 10 Fibonacci numbers without recursion
  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  // Task 15: Find the nth Fibonacci number using recursion
  const fibonacciRecursive = (n) => {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  };
  const nthFibonacci = fibonacciRecursive(10); // Example for the 10th Fibonacci number

  // Task 16: Check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Task 17: Calculate the sum of digits of a positive integer
  const sumOfDigits = (num) => num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  const digitSum = sumOfDigits(12345); // Example for number 12345

  // Task 18: Print the first 100 prime numbers
  const first100Primes = [];
  let num = 2;
  while (first100Primes.length < 100) {
    if (isPrime(num)) {
      first100Primes.push(num);
    }
    num++;
  }

  // Task 19: Return an array of the first "p" prime numbers greater than "n"
  const primesGreaterThanN = (p, n) => {
    const primes = [];
    let number = n + 1;
    while (primes.length < p) {
      if (isPrime(number)) {
        primes.push(number);
      }
      number++;
    }
    return primes;
  };
  const primesArray = primesGreaterThanN(5, 10); // Example to find 5 primes greater than 10

  // Task 20: Rotate an array to the left by 1 position
  const rotateLeft = (arr) => arr.length ? arr.slice(1).concat(arr[0]) : arr;
  const rotatedLeftArray = rotateLeft([1, 2, 3, 4, 5]);

  // Task 21: Rotate an array to the right by 1 position
  const rotateRight = (arr) => arr.length ? [arr[arr.length - 1]].concat(arr.slice(0, arr.length - 1)) : arr;
  const rotatedRightArray = rotateRight([1, 2, 3, 4, 5]);

  // Task 22: Reverse an array
  const reverseArray = (arr) => arr.slice().reverse();
  const reversedArray = reverseArray([1, 2, 3, 4, 5]);

  // Task 23: Reverse a string
  const reverseString = (str) => str.split('').reverse().join('');
  const reversedString = reverseString("Hello");

  // Task 24: Merge two arrays and return the result as a new array
  const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
  const mergedArray = mergeArrays([1, 2, 3], [4, 5, 6]);

  // Task 25: Return an array composed of all numbers in either the first or second array but not both
  const arrayDifference = (arr1, arr2) => arr1
    .filter(x => !arr2.includes(x))
    .concat(arr2.filter(x => !arr1.includes(x)));
  const diffArray = arrayDifference([1, 2, 3], [2, 3, 4]);

  // Task 26: Return an array with elements that are in the first array but not in the second
  const arraySubtract = (arr1, arr2) => arr1.filter(x => !arr2.includes(x));
  const subtractedArray = arraySubtract([1, 2, 3], [2, 3, 4]);

  return (
    <div>
      <h3>Numbers from 1 to 10:</h3>
      <p>{numbers.join(', ')}</p>

      <h3>Odd numbers less than 100:</h3>
      <p>{oddNumbers.join(', ')}</p>

      <h3>Multiplication Table of 7:</h3>
      <pre>{tableOfSeven.join('\n')}</pre>

      <h3>Multiplication Tables from 1 to 10:</h3>
      <pre>{tables.join('\n')}</pre>

      <h3>Sum of numbers from 1 to 10:</h3>
      <p>{sum}</p>

      <h3>Factorial of 10:</h3>
      <p>{factorial}</p>

      <h3>Sum of even numbers greater than 10 and less than 30:</h3>
      <p>{evenSum}</p>

      <h3>Convert 30°C to Fahrenheit:</h3>
      <p>{fahrenheitFromCelsius}°F</p>

      <h3>Convert 86°F to Celsius:</h3>
      <p>{celsiusFromFahrenheit}°C</p>

      <h3>Sum of numbers in array [1, 2, 3, 4, 5]:</h3>
      <p>{sumOfArray}</p>

      <h3>Average of numbers in array [1, 2, 3, 4, 5]:</h3>
      <p>{averageOfArray}</p>

      <h3>Positive numbers from array [-1, 2, -3, 4, 5]:</h3>
      <p>{positiveArray.join(', ')}</p>

      <h3>Maximum number in array [1, 2, 3, 4, 5]:</h3>
      <p>{maxInArray}</p>

      <h3>First 10 Fibonacci numbers:</h3>
      <p>{fibonacci.join(', ')}</p>

      <h3>10th Fibonacci number (recursive):</h3>
      <p>{nthFibonacci}</p>

      <h3>Sum of digits of 12345:</h3>
      <p>{digitSum}</p>

      <h3>First 100 prime numbers:</h3>
      <pre>{first100Primes.join(', ')}</pre>

      <h3>First 5 prime numbers greater than 10:</h3>
      <p>{primesArray.join(', ')}</p>

      <h3>Array [1, 2, 3, 4, 5] rotated left:</h3>
      <p>{rotatedLeftArray.join(', ')}</p>

      <h3>Array [1, 2, 3, 4, 5] rotated right:</h3>
      <p>{rotatedRightArray.join(', ')}</p>

      <h3>Array [1, 2, 3, 4, 5] reversed:</h3>
      <p>{reversedArray.join(', ')}</p>

      <h3>String "Hello" reversed:</h3>
      <p>{reversedString}</p>

      <h3>Arrays [1, 2, 3] and [4, 5, 6] merged:</h3>
      <p>{mergedArray.join(', ')}</p>

      <h3>Difference between arrays [1, 2, 3] and [2, 3, 4]:</h3>
      <p>{diffArray.join(', ')}</p>

      <h3>Subtracted array [1, 2, 3] - [2, 3, 4]:</h3>
      <p>{subtractedArray.join(', ')}</p>
    </div>
  );
}

export default NumberDisplay;
