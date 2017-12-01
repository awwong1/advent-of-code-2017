'use strict'

/*
The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.

For example:

1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
1111 produces 4 because each digit (all 1) matches the next.
1234 produces 0 because no digit matches the next.
91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
*/

function inverseCaptcha (inputNumber) {
  const digitArray = [...(inputNumber + '')].map(v => +v)
  let sum = 0
  for (let i = 0; i < digitArray.length; i++) {
    if (digitArray[i] === digitArray[(i + 1) % digitArray.length]) {
      sum += digitArray[i]
    }
  }
  return sum
}

function inverseCaptchaHalf (inputNumber) {
  const digitArray = [...(inputNumber + '')].map(v => +v)
  let sum = 0
  for (let i = 0; i < digitArray.length; i++) {
    if (
      digitArray[i] ===
      digitArray[(i + digitArray.length / 2) % digitArray.length]
    ) {
      sum += digitArray[i]
    }
  }
  return sum
}

module.exports = { inverseCaptcha, inverseCaptchaHalf }
