// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// Math.pow(1, 2) + Math.pow(9, 2) = 82
// Math.pow(8, 2) + Math.pow(2, 2) = 68
// Math.pow(6, 2) + Math.pow(8, 2) = 100
// Math.pow(1, 2) + Math.pow(0, 2) + Math.pow(0, 2) = 1

/**
 * @param {number} n
 * @return {boolean}
 */

function isHappy(n) {
  let set = new Set();
  while (n != 1 && !set.has(n)) {
    set.add(n);
    n = nextNumber(n);
  }

  return n === 1;
}

function nextNumber(n) {
  let result = n
    .toString()
    .split("")
    .map((item) => Math.pow(item, 2))
    .reduce((item, sum) => (sum += item), 0);
  return result;
}

// console.log(isHappy(19));
